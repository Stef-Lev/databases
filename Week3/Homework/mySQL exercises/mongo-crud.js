
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const url = "mongodb+srv://stef:stefanos77d%40t%40@stefcluster-580ry.mongodb.net/test?retryWrites=true&w=majority";

//Initialize connection
mongoose.connect(url,
    { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log("Connected to database...")
    });


//Mongoose Schema
const schema = mongoose.Schema({
    id: Number,
    name: String,
    countryCode: String,
    district: String,
    population: Number
});

//Mongoose Model
const City = mongoose.model("city", schema, "city");

//Create
app.post('/', async (req, res) => {
    const post = new City({
        id: req.body.id,
        name: req.body.name,
        countryCode: req.body.countryCode,
        district: req.body.district,
        population: req.body.population
    });

    const savePost = await post.save();
    res.json(savePost);
});

//Read
app.get('/:id', async (req, res) => {
    const findCity = await City.findOne({ id: req.params.id });
    res.json(findCity);
});


//Update
app.put('/:id', async (req, res) => {
    const updatePost = await City.updateOne({ id: req.params.id }, {
        $set: {
            population: req.body.population
        }
    });

    res.json(updatePost);
});

//Delete
app.delete('/:id', async (req, res) => {
    const removeCity = await City.findOneAndRemove({ id: req.params.id });
    res.json(removeCity);
});


app.listen(port, () => console.log('Server running...'));