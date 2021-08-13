import { useState, useEffect } from 'react'
import Player from '../components/player/player';
import newtape from '../assets/newtape.png';
import newTape from '../assets/music/newtape/newtape.mp3';
import tellme from '../assets/music/newtape/tellme.mp3';
import worldwar3 from '../assets/music/newtape/worldwar3.mp3';
import girls from '../assets/music/newtape/girls.mp3';
import twelve from '../assets/music/newtape/12_23.mp3';
import six from '../assets/music/newtape/six.mp3';
import mindright from '../assets/music/newtape/mindright.mp3';
import journey from '../assets/music/newtape/journey.mp3';
import closing from '../assets/music/newtape/closing.mp3';
import sanctuary from '../assets/music/newtape/sanctuary.mp3';
import blasts from '../assets/music/newtape/blasts.mp3';
import interference from '../assets/music/newtape/interference.mp3';
import systemic from '../assets/music/newtape/systemic.mp3';
import xmas16 from '../assets/music/newtape/xmas16.mp3';
import headache from '../assets/music/newtape/headache.mp3';
import bitch from '../assets/music/newtape/bitch.mp3';

function NewTape() {
  const [songs] = useState([
    {
      title: "New Tape",
      artist: "BDZ",
      img_src: newtape,
      src: newTape
    },
    {
      title: "Tell Me",
      artist: "BDZ",
      img_src: newtape,
      src: tellme
    },
    {
      title: "World War 3",
      artist: "BDZ",
      img_src: newtape,
      src: worldwar3
    },
    {
      title: "Girls",
      artist: "BDZ",
      img_src: newtape,
      src: girls
    },
    {
      title: "12_23",
      artist: "BDZ",
      img_src: newtape,
      src: twelve
    },
    {
      title: "Six",
      artist: "BDZ",
      img_src: newtape,
      src: six
    },
    {
      title: "Mind Right",
      artist: "BDZ",
      img_src: newtape,
      src: mindright
    },
    {
      title: "Journey",
      artist: "BDZ",
      img_src: newtape,
      src: journey
    },
    {
      title: "Closing",
      artist: "BDZ",
      img_src: newtape,
      src: closing
    },
    {
      title: "Sanctuary",
      artist: "BDZ",
      img_src: newtape,
      src: sanctuary
    },
    {
      title: "Blasts",
      artist: "BDZ",
      img_src: newtape,
      src: blasts
    },
    {
      title: "Interference",
      artist: "BDZ",
      img_src: newtape,
      src: interference
    },
    {
      title: "Systemic",
      artist: "BDZ",
      img_src: newtape,
      src: systemic
    },
    {
      title: "XMAS 16",
      artist: "BDZ",
      img_src: newtape,
      src: xmas16
    },
    {
      title: "Headache",
      artist: "BDZ",
      img_src: newtape,
      src: headache
    },
    {
      title: "Bitch",
      artist: "BDZ",
      img_src: newtape,
      src: bitch
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);


  return (
    <div className='player-container'>
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default NewTape;
