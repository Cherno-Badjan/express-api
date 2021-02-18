//import express library
const express = require('express');
//import cors analogous to import cors from 'cors'.
const cors = require('cors');

//declare app. The app is the place to define our routes/endpoints.
const app = express();
//import data
const { characters } = require('./data.js');

app.use(cors());

//Define endpoints. '/' = home route. first argument is path to endpoint and second argument is a callback. req is the request made and res is the response.
app.get('/characters', (req, res) => {
    res.json({ characters });
});
app.get('/characters/:id', (req, res) => {
    const id = Number(req.params.id);
    const selectedCharacter = characters.find((character) => character.id === id);

    res.json({ selectedCharacter })
});

module.exports = {
    app
};
