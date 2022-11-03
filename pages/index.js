import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

// const DUMMY_MEETUPS = [
// 	{
// 		id: 'm1',
// 		title: 'First meetup',
// 		image:
// 			'https://support.bang-olufsen.com/hc/article_attachments/360052693671/H9b2.png',
// 		address: 'some address,12345',
// 		description: 'desc',
// 	},
// 	{
// 		id: 'm2',
// 		title: 'Second meetup',
// 		image:
// 			'https://support.bang-olufsen.com/hc/article_attachments/360052693671/H9b2.png',
// 		address: 'some address,54321',
// 		description: 'desc',
// 	},
// ];
const HomePage = (props) => {
	return (
		<>
			<Head>
				<title>meetup page</title>
				<meta name="description" content="Browse interactive meetups" />
			</Head>
			<MeetupList meetups={props.meetups} />
		</>
	);
};

//will not run during the build process, instead always on the server after deployment(run on the server) but need to wait page generate if you need req and res you have to use this
// export const getServerSideProps = async (context) => {
// 	//fetch data

// 	const req = context.req;
// 	const res = context.res;
// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// };

//only run in the build process
//not the second component render cycle on the client  but initially before prerendered during the process (faster with cache)

export const getStaticProps = async () => {
	//fetch

	const client = await MongoClient.connect(
		'mongodb+srv://jeffliu:911006@cluster0.gbw3n.mongodb.net/meetup?retryWrites=true&w=majority'
	);
	const db = client.db();
	const meetupCollection = db.collection('meetup');
	const meetups = await meetupCollection.find().toArray();
	client.close();
	return {
		props: {
			meetups: meetups.map((m) => ({
				title: m.title,
				address: m.address,
				image: m.image,
				id: m._id.toString(),
				// ...m,
				// id: m._id.toString(),
			})),
		},
		revalidate: 1,
	};
};

//incremental static generation (revalidate) regenerate every 10 second if there are request coming in

export default HomePage;
