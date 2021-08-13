import { useState, useEffect } from 'react'
import Player from '../components/player/player';
import newtape from '../assets/newtape.png';

function NewTape() {
  const [songs] = useState([
    {
      title: "New Tape",
      artist: "BDZ",
      img_src: newtape,
      src: "/music/newtape/newtape.mp3"
    },
    {
      title: "Tell Me",
      artist: "BDZ",
      img_src: newtape,
      src: "/music/newtape/tellme.mp3"
    },
    {
      title: "World War 3",
      artist: "BDZ",
      img_src: newtape,
      src: "/music/newtape/worldwar3.mp3"
    },
    {
      title: "Girls",
      artist: "BDZ",
      img_src: newtape,
      src: "/music/newtape/girls.mp3"
    },
    {
      title: "12_23",
      artist: "BDZ",
      img_src: newtape,
      src: "/music/newtape/12_23.mp3"
    },
    {
      title: "Six",
      artist: "BDZ",
      img_src: newtape,
      src: "/music/newtape/six.mp3"
    },
    {
      title: "Mind Right",
      artist: "BDZ",
      img_src: newtape,
      src: "/music/newtape/mindright.mp3"
    },
    {
      title: "Journey",
      artist: "BDZ",
      img_src: newtape,
      src: "/music/newtape/journey.mp3"
    },
    {
      title: "Closing",
      artist: "BDZ",
      img_src: newtape,
      src: "/music/newtape/closing.mp3"
    },
    {
      title: "Sanctuary",
      artist: "BDZ",
      img_src: newtape,
      src: "/music/newtape/sanctuary.mp3"
    },
    {
      title: "Blasts",
      artist: "BDZ",
      img_src: newtape,
      src: "/music/newtape/blasts.mp3"
    },
    {
      title: "Interference",
      artist: "BDZ",
      img_src: newtape,
      src: "/music/newtape/interference.mp3"
    },
    {
      title: "Systemic",
      artist: "BDZ",
      img_src: newtape,
      src: "/music/newtape/systemic.mp3"
    },
    {
      title: "XMAS 16",
      artist: "BDZ",
      img_src: newtape,
      src: "/music/newtape/xmas16.mp3"
    },
    {
      title: "Headache",
      artist: "BDZ",
      img_src: newtape,
      src: "/music/newtape/headache.mp3"
    },
    {
      title: "Bitch",
      artist: "BDZ",
      img_src: newtape,
      src: "/music/newtape/bitch.mp3"
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
