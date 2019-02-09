require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const axios = require('axios');

const placeholder_data = require('./placeholder_data');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

const BASE_URL = 'https://www.giantbomb.com/api/';

app.get('/api/games', (req, res) => {

  if (typeof process.env.API_KEY_GIANTBOMB === 'undefined') {
    res.json(placeholder_data.PLACEHOLDER_DATA.data.results);
  } else {
    const searchTerm = req.query.searchTerm;
    const page = typeof req.query.page === 'undefined' ? 0 : req.query.page;

    axios.get(`${BASE_URL}games/`, {
      params: {
        limit: 10,
        field_list: 'id,guid,name,original_release_date,image',
        format: 'json',
        filter: `name:${searchTerm}`,
        offset: page * 10,
        api_key: process.env.API_KEY_GIANTBOMB,
      },
    })
    .then((results) => {
      //console.log(results.data);
      res.json(results.data);
    })
    .catch((error) => {
      // res.json(results.error);
      console.log(error);
    });
  }
});

app.get('/api/games/:guid', (req, res) => {
  if (typeof process.env.API_KEY_GIANTBOMB === 'undefined') {
    res.json(placeholder_data.GAME_DETAILS.data.results);
  } else {
    axios.get(`${BASE_URL}game/${req.params.guid}`, {
      params: {
        api_key: process.env.API_KEY_GIANTBOMB,
        format: 'json',
        field_list: 'id,guid,name,original_release_date,image,deck',
      }
    })
    .then((results) => {
      res.json(results.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

});
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
