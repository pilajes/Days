// pages/api/add-email.js

import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    try {
        // Connect to MongoDB
        const client = new MongoClient('mongodb+srv://solomonpickett:9mzjk7reZB3szqjM@cluster0.rnr7cia.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await client.connect();

        // Access the MongoDB database instance
        const db = client.db('Days');

        // Insert the email into the collection
        const { email } = req.body;
        await db.collection('waitlist').insertOne({ email });

        // Close the connection
        await client.close();

        res.status(201).json({ message: 'Email added successfully!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
