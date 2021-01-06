const fs = require('fs');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/api', (req, res) => {
  res.send('Cinema server');
});

app.get('/api/movies', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, dataJson) => {
      if (err) {
          console.log("File read failed in GET /data: "+ err);
          res.status(500).send('File read failed');
          return;
      }
      var data = JSON.parse(dataJson);
      var movies = data.Movies;
      console.log("GET: /movies");
      res.send(movies);
  });
});

app.get('/api/rooms', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, dataJson) => {
      if (err) {
          console.log("File read failed in GET /data: "+ err);
          res.status(500).send('File read failed');
          return;
      }
      var data = JSON.parse(dataJson);
      var rooms = data.Rooms;
      console.log("GET: /rooms");
      res.send(rooms);
  });
});

app.get('/api/seanses', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, dataJson) => {
      if (err) {
          console.log("File read failed in GET /data: "+ err);
          res.status(500).send('File read failed');
          return;
      }
      var data = JSON.parse(dataJson);
      var seanses = data.Seanses;
      console.log("GET: /seanses");
      res.send(seanses);
  });
});

app.listen(8002, () => console.log("Server address http://localhost:8002"));
