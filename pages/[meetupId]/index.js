import MeetupDetail from '../../components/meetups/MeetupDetail';
import { useRouter } from 'next/router';
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
const MeetupDetails = (props) => {
	const router = useRouter();
	const id = router.query.meetupId;
	// console.log(id);
	// const data = {
	// 	id: 1,
	// 	src: 'https://support.bang-olufsen.com/hc/article_attachments/360052693671/H9b2.png',
	// 	alt: 'H9 headphone',
	// 	title: `${id} details`,
	// 	address: '1234 burke',
	// 	desc: 'descriptions',
	// };
	return (
		<>
			<Head>
				<title>{props.meetupData.title}</title>
				<meta name="description" content={props.meetupData.description} />
			</Head>
			<MeetupDetail {...props.meetupData} />
		</>
	);
};

export const getStaticPaths = async () => {
	const client = await MongoClient.connect(
		'mongodb+srv://jeffliu:911006@cluster0.gbw3n.mongodb.net/meetup?retryWrites=true&w=majority'
	);
	const db = client.db();
	const meetupCollection = db.collection('meetup');
	//_id: 1 only contains ID
	const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
	client.close();

	return {
		//fallback true: can render page beyond path data/ false:only render path data otherwise 404

		fallback: false,
		paths: meetups.map((m) => ({ params: { meetupId: m._id.toString() } })),
	};
};

export const getStaticProps = async (context) => {
	const meetupId = context.params.meetupId;
	console.log(meetupId);
	const client = await MongoClient.connect(
		'mongodb+srv://jeffliu:911006@cluster0.gbw3n.mongodb.net/meetup?retryWrites=true&w=majority'
	);
	const db = client.db();
	const meetupCollection = db.collection('meetup');
	//_id: 1 only contains ID
	const meetupObjectId = new ObjectId(meetupId);
	console.log(meetupObjectId);
	const selectedMeetup = await meetupCollection.findOne({
		_id: meetupObjectId,
	});
	console.log(selectedMeetup);
	client.close();

	//fetch single meetup
	//context in getstaticprops do not have req res but have params
	console.log({ ...selectedMeetup, id: selectedMeetup._id.toString() });
	return {
		props: {
			meetupData: {
				// ...selectedMeetup,(have _id will get error)
				id: selectedMeetup._id.toString(),
				title: selectedMeetup.title,
				src: selectedMeetup.image,
				alt: 'image',
				address: selectedMeetup.address,
				desc: selectedMeetup.description,
			},
		},
	};
};

export default MeetupDetails;
