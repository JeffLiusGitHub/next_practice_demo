//api/new-meetup
import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const data = req.body;
		const { title, image, address, description } = data;
		const client = await MongoClient.connect(
			'mongodb+srv://jeffliu:911006@cluster0.gbw3n.mongodb.net/meetup?retryWrites=true&w=majority'
		);
		const db = client.db();
		const meetupCollection = db.collection('meetup');
		const result = await meetupCollection.insertOne(data);
		console.log(result);
		client.close();
		res.status(201).json({ message: 'meetup inserted!' });
		
	}
};

export default handler;
