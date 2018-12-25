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

app.get('/api/games', (req, res) => {

  if (typeof process.env.API_KEY_GIANTBOMB === 'undefined') {
    res.json(placeholder_data.PLACEHOLDER_DATA);
  } else {
    const searchTerm = req.query.searchTerm;

    axios.get('https://www.giantbomb.com/api/games/', {
      params: {
        limit: 10,
        field_list: 'id,name,original_release_date,image',
        format: 'json',
        filter: `name:${searchTerm}`,
        api_key: process.env.API_KEY_GIANTBOMB,
      },
    })
      .then((results) => {
        // console.log(results);
        res.json(results.data);
      })
      .catch((error) => {
        // res.json(results.error);
        console.log(error);
      });
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
