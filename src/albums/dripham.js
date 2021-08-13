import { useState, useEffect } from 'react'
import Player from '../components/player/player';
import dripham from '../assets/dripham.jpg';

function DripHam() {
  const [songs] = useState([
    {
      title: "Intro",
      artist: "BDZ",
      img_src: dripham,
      src: "/music/dripham/intro.mp3"
    },
    {
      title: "Heavy Hitter",
      artist: "BDZ",
      img_src: dripham,
      src: "/music/dripham/heavyhitter.mp3"
    },
    {
      title: "Monstrous",
      artist: "BDZ",
      img_src: dripham,
      src: "/music/dripham/monstrous.mp3"
    },
    {
      title: "Low Low",
      artist: "BDZ",
      img_src: dripham,
      src: "/music/dripham/lowlow.mp3"
    },
    {
      title: "Shaking Tower",
      artist: "BDZ",
      img_src: dripham,
      src: "/music/dripham/shakingtower.mp3"
    },
    {
      title: "Dirty Planet (Freestyle For Jimmer)",
      artist: "BDZ",
      img_src: dripham,
      src: "/music/dripham/dirtyplanet.mp3"
    },
    {
      title: "Fuck That",
      artist: "BDZ",
      img_src: dripham,
      src: "/music/dripham/fuckthat.mp3"
    },
    {
      title: "Tied",
      artist: "BDZ",
      img_src: dripham,
      src: "/music/dripham/tied.mp3"
    },
    {
      title: "Why",
      artist: "BDZ",
      img_src: dripham,
      src: "/music/dripham/why.mp3"
    },
    {
      title: "So High",
      artist: "BDZ",
      img_src: dripham,
      src: "/music/dripham/sohigh.mp3"
    },
    {
      title: "Doses - Outro",
      artist: "BDZ",
      img_src: dripham,
      src: "/music/dripham/doses.mp3"
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

export default DripHam;
