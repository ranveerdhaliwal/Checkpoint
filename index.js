require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/games', (req, res) => {
  const PLACEHOLDER_DATA = {
    error: 'OK',
    limit: 10,
    offset: 0,
    number_of_page_results: 10,
    number_of_total_results: 180,
    status_code: 1,
    results: [
      { id: 544, name: 'Super Mario All-Stars & Super Mario World' },
      { id: 814, name: 'Mario Superstar Baseball' },
      { id: 1072, name: 'Dr. Mario 64' },
      { id: 1334, name: 'Super Mario World' },
      { id: 1598, name: 'Mario Golf: Toadstool Tour' },
      { id: 2866, name: "Super Mario World 2: Yoshi's Island" },
      { id: 2931, name: 'Super Mario 64' },
      { id: 3410, name: 'Mario Party 5' },
      { id: 4287, name: 'Mario Pinball Land' },
      { id: 4379, name: 'Mario Teaches Typing 2' },
    ],
    version: '1.0',
  };

  if (typeof process.env.API_KEY_GIANTBOMB === 'undefined') {
    res.json(PLACEHOLDER_DATA);
  } else {
    const searchTerm = req.query.searchTerm;

    axios.get('https://www.giantbomb.com/api/games/', {
      params: {
        limit: 10,
        field_list: 'id,name',
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
