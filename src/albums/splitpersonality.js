import { useState, useEffect } from 'react'
import Player from '../components/player/player';
import splitpersonality from '../assets/splitpersonality.png';
import intro from '../assets/music/splitpersonality/intro.mp3'
import gs from '../assets/music/splitpersonality/100gs.mp3'
import allicanbe from '../assets/music/splitpersonality/allicanbe.mp3'
import manhunt from '../assets/music/splitpersonality/manhunt.mp3'
import everywhereigo from '../assets/music/splitpersonality/everywhereigo.mp3'
import getoutmyface from '../assets/music/splitpersonality/getoutmyface.mp3'
import depressed from '../assets/music/splitpersonality/depressed.mp3'
import pendulum from '../assets/music/splitpersonality/pendulum.mp3'
import hypnotic from '../assets/music/splitpersonality/hypnotic.mp3'
import uncanny from '../assets/music/splitpersonality/uncanny.mp3'
import bonglord from '../assets/music/splitpersonality/bonglordonthelongboard.mp3'
import castle from '../assets/music/splitpersonality/castle.mp3'

function SplitPersonality() {
  const [songs] = useState([
    {
      title: "Intro",
      artist: "BDZ",
      img_src: splitpersonality,
      src: intro
    },
    {
      title: "100 G's",
      artist: "BDZ",
      img_src: splitpersonality,
      src: gs
    },
    {
      title: "All I Can Be",
      artist: "BDZ",
      img_src: splitpersonality,
      src: allicanbe
    },
    {
      title: "Manhunt",
      artist: "BDZ",
      img_src: splitpersonality,
      src: manhunt
    },
    {
      title: "Everywhere I Go",
      artist: "BDZ",
      img_src: splitpersonality,
      src: everywhereigo
    },
    {
      title: "Get Out My Face",
      artist: "BDZ",
      img_src: splitpersonality,
      src: getoutmyface
    },
    {
      title: "Depressed.MP3",
      artist: "BDZ",
      img_src: splitpersonality,
      src: depressed
    },
    {
      title: "Pendulum",
      artist: "BDZ",
      img_src: splitpersonality,
      src: pendulum
    },
    {
      title: "Hypnotic",
      artist: "BDZ",
      img_src: splitpersonality,
      src: hypnotic
    },
    {
      title: "Uncanny",
      artist: "BDZ",
      img_src: splitpersonality,
      src: uncanny
    },
    {
      title: "Bong Lord on the Longboard",
      artist: "BDZ",
      img_src: splitpersonality,
      src: bonglord
    },
    {
      title: "Castle",
      artist: "BDZ",
      img_src: splitpersonality,
      src: castle
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

export default SplitPersonality;
