# CHECKPOINT

Work in progress app that I'm developing to track backlog and current progress in various games.

I'm using the Giant Bomb API (https://www.giantbomb.com/api) to search for games

I'm also using a variety of libraries with the major ones including: React, Redux, Redux-thunk, Axios, Material-UI, Styled-components, React Router v4, and Enzyme/Jest.

## Instructions

Get your own personal API key from Giant bomb and add it to an .env file in /server

This approach will also require Docker to be installed

To start the application in the background:

### `docker-compose up -d`

To stop the application:

### `docker-compose down`

To rebuild the images after making changes:

### `docker-compose build`

It should be available at `localhost:3000`

## Screenshots:

![Search](https://i.imgur.com/l9LBHGR.jpg "Search")

![Collection](https://i.imgur.com/IIMpMNV.jpg "Collection")
