// import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
const newMeetupPage = () => {
	const router = useRouter();

	const onAddMeetupHandler = async (enteredMeetupData) => {
		const response = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(enteredMeetupData),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		console.log(data);
		router.push('/');
	};
	return (
		<>
			<Head>
			<title>add a new meetup</title>
				<meta name="description" content="add a new meetup here" />
			</Head>
			<NewMeetupForm onAddMeetup={onAddMeetupHandler} />
		</>
	);
};

export default newMeetupPage;
