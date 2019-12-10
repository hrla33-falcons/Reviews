const express = require('express');
const bodyParser = require('body-parser');
const Reviews = require('../db/data').Reviews;
const Listings = require('../db/data').Listings
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/reviews/:id', (req, res) => {
  Reviews.findAll().then((data)=> {
    res.status(200).send(data);
  }).catch((e) => {
    res.status(404).send(e);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port -> ${port} <-`);
});