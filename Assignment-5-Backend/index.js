//---------------------+++------------------------//
// Importing Required Modules
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

//---------------------+++------------------------//

// Set the Port
const port = process.env.PORT || 5000;

//---------------------+++------------------------//
//Middleware Setup
// MongoDB Setup
app.use(cors());
app.use(express.json());

//---------------------+++------------------------//

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4vti4xu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    //---------------+++-----------------//
    // Define all collections
    const menuCollection = client.db("ProductBuyingSelling").collection("menu");
    const categoryCollection = client
      .db("ProductBuyingSelling")
      .collection("category");
    //---------------+++-----------------//

    //---------------+++-----------------//
    // Menu-Related API Endpoints
    app.get("/menu", async (req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    });
    app.get("/menu/:category", async (req, res) => {
      const { category } = req.params;
      // Convert cursor to array using toArray() before sending
      const result = await menuCollection.find({ category }).toArray();
      res.send(result);
    });
    app.get("/category", async (req, res) => {
      const result = await categoryCollection.find().toArray();
      res.send(result);
    });
    //---------------+++-----------------//

    //---------------+++-----------------//
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

//---------------+++-----------------//

// Root Endpoint
app.get("/", (req, res) => {
  res.send("Bistro boss Server is running.");
});

// Start the server
app.listen(port, () => {
  console.log(`Bistro boss server is running on port ${port}`);
});

//---------------+++-----------------//
