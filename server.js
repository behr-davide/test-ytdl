const youtube = require('./youtube');
const express = require('express');
const _ = require('underscore');
const nofavicon = require('express-no-favicons');
const moment = require("moment");
require("moment-duration-format");
require('dotenv').config();

let app = express();
const port = 4000;
const YT_API_KEY = process.env.YT_API_KEY;

youtube.setKey(YT_API_KEY);
app.use(nofavicon());

app.get('/', function (req, res) {
  console.log("home");
});

app.get('/chunk/:videoId', (req, res) => {
  const videoId = req.params.videoId;

  try {
    youtube.download({ id: videoId }, (err, { id, file }) => {
      if (err) return res.sendStatus(500, err);
      res.sendFile(file);
    })
  } catch (e) {
    console.error(e);
    res.sendStatus(500, e);
  }
})

app.get('/:videoId', (req, res) => {
  const videoId = req.params.videoId;

  try {
    youtube.stream(videoId).pipe(res);
  } catch (e) {
    console.error(e);
    res.sendStatus(500, e);
  }
})

app.get('/cache/:videoId', (req, res) => {
  const videoId = req.params.videoId;

  try {
    youtube.stream(videoId, true).pipe(res);
  } catch (e) {
    console.error(e);
    res.sendStatus(500, e);
  }
})

filterSearchResults = (results) => results
  .map(result => ({ 'videoId': result.id.videoId, 'title': result.snippet.title }));

app.get('/search/:query/:type?', (req, res) => {
  const { query, type } = req.params;
  youtube.search({ query, type }, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500, err);
      return
    }
    results = data.items;
    filtered = filterSearchResults(results);
    res.json(filtered);
  })
})

processDuration = (duration) => moment
  .duration(duration)
  .format('ss')
  .padStart(4, '0:0');

app.get('/get/:videoId', (req, res) => {
  const videoId = req.params.videoId;

  youtube.get(videoId, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500, err);
      return
    }

    duration = data.items[0].contentDetails.duration;
    title = data.items[0].snippet.title;

    subset = {
      'id': videoId,
      'duration': processDuration(duration),
      'title': title
    };

    res.json(subset);
  })
})

app.use((req, res) => {
  res.sendStatus(404)
})

app.listen(port, () => console.log(`Listening on port: ${port}`));