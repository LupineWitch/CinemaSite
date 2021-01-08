const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Console } = require("console");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Cinema server");
});

app.get("/movies", (req, res) => {
  fs.readFile("./data.json", "utf8", (err, dataJson) => {
    if (err) {
      console.log("File read failed in GET /data: " + err);
      res.status(500).send("File read failed");
      return;
    }
    var data = JSON.parse(dataJson);
    var movies = data.Movies;
    console.log("GET: /movies");
    res.send(movies);
  });
});

app.post("/movies", (req, res) => {
  fs.readFile("./data.json", "utf8", (err, dataJson) => {
    if (err) {
      console.log("File read failed in POST /movies: " + err);
      res.status(500).send("File read failed");
      return;
    }
    var data = JSON.parse(dataJson);
    var movie = data.Movies.find((m) => m.id == req.body.id);
    if (!movie) {
      data.Movies.push(req.body);
      var newList = JSON.stringify(data);
      fs.writeFile("./data.json", newList, (err) => {
        if (err) {
          console.log("Error writing file in POST /movies: " + err);
          res.status(500).send("Error writing file data.json");
        } else {
          res.status(201).send(req.body);
          console.log(
            "Successfully wrote file data.json and added new movie with id = " +
              req.body.id
          );
        }
      });
    } else {
      console.log("Movie by id = " + req.body.id + " already exists");
      res
        .status(500)
        .send("Movie by id = " + req.body.id + " already exists");
      return;
    }
  });
});

app.put("/movies/:id", (req, res) => {
  fs.readFile("./data.json", "utf8", (err, dataJson) => {
    if (err) {
      console.log(
        "File read failed in PUT /movies/" + req.params.id + ": " + err
      );
      res.status(500).send("File read failed");
      return;
    }
    var data = JSON.parse(dataJson);
    var movieBody = data.Movies.find((m) => m.id == req.body.id);

    if (movieBody && movieBody.id != req.params.id) {
      console.log("Movie by id = " + movieBody.id + " already exists");
      res
        .status(500)
        .send("Movie by id = " + movieBody.id + " already exists");
      return;
    }
    var movie = data.Movies.find((m) => m.id == req.params.id);
    if (!movie) {
      data.Movies.push(req.body);
      var newList = JSON.stringify(data);
      fs.writeFile("./data.json", newList, (err) => {
        if (err) {
          console.log(
            "Error writing file in PUT /movies/" + req.params.id + ": " + err
          );
          res.status(500).send("Error writing file data.json");
        } else {
          res.status(201).send(req.body);
          console.log(
            "Successfully wrote file data.json and added new movie with id = " +
              req.body.id
          );
        }
      });
    } else {
      var idx = data.Movies.findIndex((m) => m.id == req.params.id);
      data.Movies[idx] = req.body;
      var newList = JSON.stringify(data);
      fs.writeFile("./data.json", newList, (err) => {
        if (err) {
          console.log(
            "Error writing file in PUT /movies/" + req.params.id + ": " + err
          );
          res.status(500).send("Error writing file data.json");
        } else {
          res.status(200).send(req.body);
          console.log(
            "Successfully wrote file data.json and edit movie with old id = " +
              req.params.id
          );
        }
      });
    }
  });
});

app.delete("/movies/:id", (req, res) => {
  fs.readFile("./data.json", "utf8", (err, dataJson) => {
    if (err) {
      console.log("File read failed in DELETE /movies: " + err);
      res.status(500).send("File read failed");
      return;
    }
    var data = JSON.parse(dataJson);
    var idx = data.Movies.findIndex(
      (m) => m.id == req.params.id
    );

    if (idx != -1) {
      data.Movies.splice(idx, 1);
      var newList = JSON.stringify(data);
      fs.writeFile("./data.json", newList, (err) => {
        if (err) {
          console.log(
            "Error writing file in DELETE /movies/" + req.params.id + ": " + err
          );
          res.status(500).send("Error writing file data.json");
        } else {
          res.status(204).send();
          console.log("Successfully deleted movie with id = " + req.params.id);
        }
      });
    } else {
      console.log("Movie by id = " + req.params.id + " does not exists");
      res
        .status(500)
        .send("Movie by id = " + req.params.id + " does not exists");
      return;
    }
  });
});

app.get("/rooms", (req, res) => {
  fs.readFile("./data.json", "utf8", (err, dataJson) => {
    if (err) {
      console.log("File read failed in GET /data: " + err);
      res.status(500).send("File read failed");
      return;
    }
    var data = JSON.parse(dataJson);
    var rooms = data.Rooms;
    console.log("GET: /rooms");
    res.send(rooms);
  });
});

app.post("/rooms", (req, res) => {
  fs.readFile("./data.json", "utf8", (err, dataJson) => {
    if (err) {
      console.log("File read failed in POST /rooms: " + err);
      res.status(500).send("File read failed");
      return;
    }
    var data = JSON.parse(dataJson);
    var room = data.Rooms.find((r) => r.nr == req.body.nr);
    if (!room) {
      data.Rooms.push(req.body);
      var newList = JSON.stringify(data);
      fs.writeFile("./data.json", newList, (err) => {
        if (err) {
          console.log("Error writing file in POST /rooms: " + err);
          res.status(500).send("Error writing file data.json");
        } else {
          res.status(201).send(req.body);
          console.log(
            "Successfully wrote file data.json and added new movie with id = " +
              req.body.id
          );
        }
      });
    } else {
      console.log("Movie by id = " + req.body.id + " already exists");
      res
        .status(500)
        .send("Movie by id = " + req.body.id + " already exists");
      return;
    }
  });
});

app.delete("/rooms/:nr", (req, res) => {
  fs.readFile("./data.json", "utf8", (err, dataJson) => {
    if (err) {
      console.log("File read failed in DELETE /rooms: " + err);
      res.status(500).send("File read failed");
      return;
    }
    var data = JSON.parse(dataJson);
    var idx = data.Rooms.findIndex(
      (r) => r.nr == req.params.nr
    );

    if (idx != -1) {
      data.Rooms.splice(idx, 1);
      var newList = JSON.stringify(data);
      fs.writeFile("./data.json", newList, (err) => {
        if (err) {
          console.log(
            "Error writing file in DELETE /rooms/" + req.params.nr + ": " + err
          );
          res.status(500).send("Error writing file data.json");
        } else {
          res.status(204).send();
          console.log("Successfully deleted movie with id = " + req.params.nr);
        }
      });
    } else {
      console.log("Room by id = " + req.params.nr + " does not exists");
      res
        .status(500)
        .send("Room by id = " + req.params.nr + " does not exists");
      return;
    }
  });
});

app.put("/rooms/:nr", (req, res) => {
  fs.readFile("./data.json", "utf8", (err, dataJson) => {
    if (err) {
      console.log(
        "File read failed in PUT /rooms/" + req.params.nr + ": " + err
      );
      res.status(500).send("File read failed");
      return;
    }
    var data = JSON.parse(dataJson);
    var roomBody = data.Rooms.find((r) => r.nr == req.body.nr);

    if (roomBody && roomBody.nr != req.params.nr) {
      console.log("Room by nr = " + movieBody.nr + " already exists");
      res
        .status(500)
        .send("Room by nr = " + movieBody.id + " already exists");
      return;
    }
    var room = data.Rooms.find((r) => r.nr == req.params.nr);
    if (!room) {
      data.Rooms.push(req.body);
      var newList = JSON.stringify(data);
      fs.writeFile("./data.json", newList, (err) => {
        if (err) {
          console.log(
            "Error writing file in PUT /movies/" + req.params.nr + ": " + err
          );
          res.status(500).send("Error writing file data.json");
        } else {
          res.status(201).send(req.body);
          console.log(
            "Successfully wrote file data.json and added new movie with id = " +
              req.body.nr
          );
        }
      });
    } else {
      var idx = data.Rooms.findIndex((r) => r.nr == req.params.nr);
      data.Rooms[idx] = req.body;
      var newList = JSON.stringify(data);
      fs.writeFile("./data.json", newList, (err) => {
        if (err) {
          console.log(
            "Error writing file in PUT /movies/" + req.params.nr + ": " + err
          );
          res.status(500).send("Error writing file data.json");
        } else {
          res.status(200).send(req.body);
          console.log(
            "Successfully wrote file data.json and edit movie with old id = " +
              req.params.nr
          );
        }
      });
    }
  });
});

app.get("/seanses", (req, res) => {
  fs.readFile("./data.json", "utf8", (err, dataJson) => {
    if (err) {
      console.log("File read failed in GET /data: " + err);
      res.status(500).send("File read failed");
      return;
    }
    var data = JSON.parse(dataJson);
    var seanses = data.Seanses;
    console.log("GET: /seanses");
    res.send(seanses);
  });
});


app.post("/seanses", (req, res) => {
  fs.readFile("./data.json", "utf8", (err, dataJson) => {
    if (err) {
      console.log("File read failed in POST /seanses: " + err);
      res.status(500).send("File read failed");
      return;
    }
    var data = JSON.parse(dataJson);
    var screening = data.Seanses.find((s) => s.id == req.body.id);
    if (!screening) {
      data.Seanses.push(req.body);
      var newList = JSON.stringify(data);
      fs.writeFile("./data.json", newList, (err) => {
        if (err) {
          console.log("Error writing file in POST /seanses: " + err);
          res.status(500).send("Error writing file data.json");
        } else {
          res.status(201).send(req.body);
          console.log(
            "Successfully wrote file data.json and added new screening with id = " +
              req.body.id
          );
        }
      });
    } else {
      console.log("Screening by id = " + req.body.id + " already exists");
      res
        .status(500)
        .send("Screening by id = " + req.body.id + " already exists");
      return;
    }
  });
});



app.delete("/seanses/:id", (req, res) => {
  fs.readFile("./data.json", "utf8", (err, dataJson) => {
    if (err) {
      console.log("File read failed in DELETE /seanses: " + err);
      res.status(500).send("File read failed");
      return;
    }
    var data = JSON.parse(dataJson);
    var idx = data.Seanses.findIndex(
      (s) => s.id == req.params.id
    );
  console.log("idx="+idx);
    if (idx != -1) {
      data.Seanses.splice(idx, 1);
      var newList = JSON.stringify(data);
      fs.writeFile("./data.json", newList, (err) => {
        if (err) {
          console.log(
            "Error writing file in DELETE /seanses/" + req.params.id + ": " + err
          );
          res.status(500).send("Error writing file data.json");
        } else {
          res.status(204).send();
          console.log("Successfully deleted screening with id = " + req.params.id);
        }
      });
    } else {
      console.log("screening by id = " + req.params.id + " does not exists");
      res
        .status(500)
        .send("screening by id = " + req.params.id + " does not exists");
      return;
    }
  });
});


app.put("/seanses/:id", (req, res) => {
  fs.readFile("./data.json", "utf8", (err, dataJson) => {
    if (err) {
      console.log(
        "File read failed in PUT /seanses/" + req.params.id + ": " + err
      );
      res.status(500).send("File read failed");
      return;
    }
    var data = JSON.parse(dataJson);
    var screeningBody = data.Seanses.find((s) => s.id == req.body.id);

    if (screeningBody && screeningBody.id != req.params.id) {
      console.log("Screening by id = " + screeningBody.id + " already exists");
      res
        .status(500)
        .send("Screening by id = " + screeningBody.id + " already exists");
      return;
    }
    var screening = data.Seanses.find((s) => s.id == req.params.id);
    if (!screening) {
      data.Seanses.push(req.body);
      var newList = JSON.stringify(data);
      fs.writeFile("./data.json", newList, (err) => {
        if (err) {
          console.log(
            "Error writing file in PUT /seanses/" + req.params.id + ": " + err
          );
          res.status(500).send("Error writing file data.json");
        } else {
          res.status(201).send(req.body);
          console.log(
            "Successfully wrote file data.json and added new screening with id = " +
              req.body.id
          );
        }
      });
    } else {
      var idx = data.Seanses.findIndex((m) => m.id == req.params.id);
      data.Seanses[idx] = req.body;
      var newList = JSON.stringify(data);
      fs.writeFile("./data.json", newList, (err) => {
        if (err) {
          console.log(
            "Error writing file in PUT /seanses/" + req.params.id + ": " + err
          );
          res.status(500).send("Error writing file data.json");
        } else {
          res.status(200).send(req.body);
          console.log(
            "Successfully wrote file data.json and edit screening with old id = " +
              req.params.id
          );
        }
      });
    }
  });
});

app.listen(8002, () => console.log("Server address http://localhost:8002"));
