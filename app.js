const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'test';

const client = new MongoClient(url);

app.use(express.json());

app.post('/insertarMongo/', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);

    const document = {
      nombre: req.body.nombre,
      edad: req.body.edad,
      curso: req.body.curso,
      // nombre: 'Juanito Pruebas',
      // edad: 21,
      // curso: 'VanGuardia',
    };

    const result = await db.collection('test').insertOne(document);

    res.status(201).json({ message: 'Documento insertado', insertedId: result.insertedId });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Ocurrió un error' });
  } finally {
    await client.close();
  }
});

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/josue/', (req, res) => {
  res.send('Josue El Crack');
});

app.get('/vanguardia/', (req, res) => {
  res.send('Estamos en clase de Tecnologías de Vanguardia después de agregar gitignore');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
