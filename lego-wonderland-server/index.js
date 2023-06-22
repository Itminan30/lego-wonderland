const express = require('express');
const cors = require('cors');
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Lego Server Runnning Successfully")
})

// MONGODB

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lhfzgeb.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // 

        const userCollection = client.db("legoMarket").collection("users");
        const toyCollection = client.db("legoMarket").collection("toys");

        // get a single toy
        app.get("/toy/:id", async (req, res) => {
            const id = new ObjectId(req.params.id);
            const query = { _id: id };
            const result = await toyCollection.findOne(query);
            res.send(result);
        })

        // get all toys
        app.get("/toys", async (req, res) => {
            const q = req.query.search;
            let query;
            if (q) {
                query = { "name": { $regex: q, '$options': 'i' } };
            }
            else {
                query = {};
            }
            const result = await toyCollection.find(query).limit(20).toArray();
            res.send(result);
        })

        // get user specific toys
        app.get("/mytoys/:email", async (req, res) => {
            const email = req.params.email;
            const q = req.query.sort;
            let options = {};
            if (q === "asc") {
                options = {
                    sort: { price: 1 }
                }
            }
            else {
                options = {
                    sort: { price: -1 }
                }
            }
            const query = { sellerEmail: email };
            const result = await toyCollection.find(query, options).toArray();
            res.send(result);
        })

        // get category specific toy
        app.get("/category", async (req, res) => {
            const category = req.query.category;
            let query;
            if(category === "rides"){
                query = {category: "Lego Rides"}
            }
            else if(category === "city"){
                query = {category: "Lego City"}
            }
            else if(category === "classic"){
                query = {category: "Classic"}
            }
            const result = await toyCollection.find(query).limit(4).toArray();
            res.send(result);
        })

        // add toys
        app.post("/addtoy", async (req, res) => {
            const toyinfo = req.body;
            toyinfo.price = parseInt(toyinfo.price);
            const query = { email: toyinfo.sellerEmail };
            const sellerInfo = await userCollection.findOne(query);
            const sellerId = sellerInfo._id.toString();
            const toy = { ...toyinfo, sellerId };
            const result = await toyCollection.insertOne(toy);
            res.send(result);
        })

        // added User 
        app.patch("/user", async (req, res) => {
            const user = req.body;
            const filter = { name: user.name };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    name: user.name,
                    email: user.email,
                    photo: user.photo
                }
            }
            const result = await userCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        })

        // update toy
        app.patch("/updateToy/:id", async (req, res) => {
            const id = new ObjectId(req.params.id);
            const { price, quantity, description, photo } = req.body;
            const filter = { _id: id };
            const updateDoc = {
                $set: {
                    price: parseInt(price),
                    quantity: quantity,
                    description: description,
                    photo: photo
                },
            };
            const result = await toyCollection.updateOne(filter, updateDoc);
            res.send(result);
        })

        // delete a toy
        app.delete("/deletetoy/:id", async (req, res) => {
            const id = new ObjectId(req.params.id);
            const query = { _id: id };
            const result = await toyCollection.deleteOne(query);
            res.send(result);
        })

        // 

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

// MONGODB

app.listen(port, () => {
    console.log("Server running on port:", port);
})