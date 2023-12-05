const express = require('express')
const app = express()
const port = 8000
const cors = require('cors'); 
const ingredienteRouter=require("./Routes/IngredienteRoutes")
const pizzaRouter=require("./Routes/PizzaRoutes")
const menuRouter=require("./Routes/MenuRoutes")
var mongoose = require("mongoose");
require("dotenv").config();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions)); // Use cors middleware with specified options
app.use(express.json());

app.use("/ingredientes",ingredienteRouter);
app.use("/pizzas",pizzaRouter);
app.use("/menus",menuRouter);

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
