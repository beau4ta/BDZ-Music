import { useState, useEffect } from 'react'
import Player from '../components/player/player';
import winterbliss from '../assets/winterbliss.png';
import planes from '../assets/music/winterbliss/planes.mp3';
import deepBlue from '../assets/music/winterbliss/deepblue.mp3';
import meadows from '../assets/music/winterbliss/meadows.mp3';
import contempt from '../assets/music/winterbliss/contempt.mp3';
import winterBliss from '../assets/music/winterbliss/winterbliss.mp3';
import caffeine from '../assets/music/winterbliss/caffeineandnicotine.mp3';
import shattered from '../assets/music/winterbliss/shattered.mp3';
import splinters from '../assets/music/winterbliss/splinters.mp3';
import tortured from '../assets/music/winterbliss/tortured.mp3';
import hazel from '../assets/music/winterbliss/hazel.mp3';

function WinterBliss() {
  const [songs] = useState([
    {
      title: "Planes",
      artist: "BDZ",
      img_src: winterbliss,
      src: planes
    },
    {
      title: "Deep Blue",
      artist: "BDZ",
      img_src: winterbliss,
      src: deepBlue
    },
    {
      title: "Meadows",
      artist: "BDZ",
      img_src: winterbliss,
      src: meadows
    },
    {
      title: "Contempt",
      artist: "BDZ",
      img_src: winterbliss,
      src: contempt
    },
    {
      title: "Winter Bliss",
      artist: "BDZ",
      img_src: winterbliss,
      src: winterBliss
    },
    {
      title: "Caffeine and Nicotine",
      artist: "BDZ",
      img_src: winterbliss,
      src: caffeine
    },
    {
      title: "Shattered",
      artist: "BDZ",
      img_src: winterbliss,
      src: shattered
    },
    {
      title: "Splinters",
      artist: "BDZ",
      img_src: winterbliss,
      src: splinters
    },
    {
      title: "Tortured",
      artist: "BDZ",
      img_src: winterbliss,
      src: tortured
    },
    {
      title: "Hazel",
      artist: "BDZ",
      img_src: winterbliss,
      src: hazel
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

export default WinterBliss;
