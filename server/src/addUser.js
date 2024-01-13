const { MongoClient } = require('mongodb');

async function addUser() {
    const uri = 'mongodb+srv://jedgray0:GVEk5n9zM4MvC02z@cluster0.17m9tt5.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    const database = client.db('social');
    const collection = database.collection('users');

    const newDocument = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      age: 25,
      password: 'securePassword',
      isAdmin: false,
    };

    const result = await collection.insertOne(newDocument);
    console.log(`Document inserted with _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

addUser();