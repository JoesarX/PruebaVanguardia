const express = require('express')
const app = express()
const port = 3000
const studentRouter=require("./Routes/StudentRoutes")
var mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());

app.use("/students",studentRouter);

mongoose.connect(process.env.MOONGOSEKEY, {
  useNewUrlParser: true,
}).then(() => {
  console.log("MongoDB connected successfully");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
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
