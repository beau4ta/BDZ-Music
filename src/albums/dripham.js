import { useState, useEffect } from 'react'
import Player from '../components/player/player';
import dripham from '../assets/dripham.jpg';
import intro from '../assets/music/dripham/intro.mp3';
import heavyhitter from '../assets/music/dripham/heavyhitter.mp3';
import monstrous from '../assets/music/dripham/monstrous.mp3';
import lowlow from '../assets/music/dripham/lowlow.mp3';
import shakingtower from '../assets/music/dripham/shakingtower.mp3';
import dirtyplanet from '../assets/music/dripham/dirtyplanet.mp3';
import tied from '../assets/music/dripham/tied.mp3';
import fuckthat from '../assets/music/dripham/fuckthat.mp3';
import sohigh from '../assets/music/dripham/sohigh.mp3';
import why from '../assets/music/dripham/why.mp3';
import doses from '../assets/music/dripham/doses.mp3';

function DripHam() {
  const [songs] = useState([
    {
      title: "Intro",
      artist: "BDZ",
      img_src: dripham,
      src: intro
    },
    {
      title: "Heavy Hitter",
      artist: "BDZ",
      img_src: dripham,
      src: heavyhitter
    },
    {
      title: "Monstrous",
      artist: "BDZ",
      img_src: dripham,
      src: monstrous
    },
    {
      title: "Low Low",
      artist: "BDZ",
      img_src: dripham,
      src: lowlow
    },
    {
      title: "Shaking Tower",
      artist: "BDZ",
      img_src: dripham,
      src: shakingtower
    },
    {
      title: "Dirty Planet (Freestyle For Jimmer)",
      artist: "BDZ",
      img_src: dripham,
      src: dirtyplanet
    },
    {
      title: "Fuck That",
      artist: "BDZ",
      img_src: dripham,
      src: fuckthat
    },
    {
      title: "Tied",
      artist: "BDZ",
      img_src: dripham,
      src: tied
    },
    {
      title: "So High",
      artist: "BDZ",
      img_src: dripham,
      src: sohigh
    },
    {
      title: "Why",
      artist: "BDZ",
      img_src: dripham,
      src: why
    },
    {
      title: "Doses - Outro",
      artist: "BDZ",
      img_src: dripham,
      src: doses
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
