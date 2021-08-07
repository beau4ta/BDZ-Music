import { useState, useEffect } from 'react'
import Player from '../components/player/player';
import winterbliss from '../assets/winterbliss.png';

function WinterBliss() {
  const [songs] = useState([
    {
      title: "Planes",
      artist: "BDZ",
      img_src: winterbliss,
      src: "/music/winterbliss/planes.mp3"
    },
    {
      title: "Deep Blue",
      artist: "BDZ",
      img_src: winterbliss,
      src: "/music/winterbliss/deepblue.mp3"
    },
    {
      title: "Meadows",
      artist: "BDZ",
      img_src: winterbliss,
      src: "/music/winterbliss/meadows.mp3"
    },
    {
      title: "Contempt",
      artist: "BDZ",
      img_src: winterbliss,
      src: "/music/winterbliss/contempt.mp3"
    },
    {
      title: "Winter Bliss",
      artist: "BDZ",
      img_src: winterbliss,
      src: "/music/winterbliss/winterbliss.mp3"
    },
    {
      title: "Caffeine and Nicotine",
      artist: "BDZ",
      img_src: winterbliss,
      src: "/music/winterbliss/caffeineandnicotine.mp3"
    },
    {
      title: "Shattered",
      artist: "BDZ",
      img_src: winterbliss,
      src: "/music/winterbliss/shattered.mp3"
    },
    {
      title: "Splinters",
      artist: "BDZ",
      img_src: winterbliss,
      src: "/music/winterbliss/splinters.mp3"
    },
    {
      title: "Tortured",
      artist: "BDZ",
      img_src: winterbliss,
      src: "/music/winterbliss/tortured.mp3"
    },
    {
      title: "Hazel",
      artist: "BDZ",
      img_src: winterbliss,
      src: "/music/winterbliss/hazel.mp3"
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
