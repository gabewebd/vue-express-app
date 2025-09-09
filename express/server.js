const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

// data for the API 
const musicData = [
  {
    title: 'senti at 10pm',
    albumSpotifyUrl: 'https://open.spotify.com/album/2fenSS68JI1h4Fo296JfGr?si=N4Xlf5MGSfmYi4KDGAMCsw',
    description: 'my go-to for when I want to feel all the emotions'
  },
  {
    title: 'road trip',
    albumSpotifyUrl: 'https://open.spotify.com/album/7Ip9X7pnkhJ4cwDoBnvneD?si=dHvItcx8S0SkI4BY0iN9OA',
    description: 'perfect for a chill drive anywhere - windows down, music up'
  },
  {
    title: 'rainy day vibes',
    albumSpotifyUrl: 'https://open.spotify.com/album/4LfFHT00C9ImLMUjHkqWjQ?si=wTVk2g3gToOCpLP-nZK_3g',
    description: 'cozy playlist for a quiet day - best enjoyed with a cup of coffee'
  },
  {
    title: 'kpop bop energy',
    albumSpotifyUrl: 'https://open.spotify.com/album/4U7rGOkJgtxs27H9L93Xli?si=DBPHM3TXQxCOwTDfvqy9Lw',
    description: 'a no-skip album that always hits different'
  },
  {
    title: 'hype mix',
    albumSpotifyUrl: 'https://open.spotify.com/album/6492Fh2wgnINBq0srX9phJ?si=8191eab9a7234fd1',
    description: 'when I want to hear a little bit of everything  from pop, rock, and electronic all in one'
  },
  {
    title: 'kdrama character moment',
    albumSpotifyUrl: 'https://open.spotify.com/album/5V8n6fqyAPxvFTibPhQVcp?si=E0CR3FFzR7-pXFPJeR5Skw',
    description: 'takes you in a kdrama world - perfect for a lazy day'
  },
];

// creating the API endpoint
app.get('/api/items', (req, res) => {
  res.json(musicData);
});

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Ainsh's fav music is now running at http://${host}:${port}`);
    console.log(`Jam to some of my favorite music right now!`);
});