import { useState, useEffect } from 'react'
import Player from '../components/player/player';
import splitpersonality from '../assets/splitpersonality.png';

function SplitPersonality() {
  const [songs] = useState([
    {
      title: "Intro",
      artist: "BDZ",
      img_src: splitpersonality,
      src: "/music/splitpersonality/intro.mp3"
    },
    {
      title: "100 G's",
      artist: "BDZ",
      img_src: splitpersonality,
      src: "/music/splitpersonality/100gs.mp3"
    },
    {
      title: "All I Can Be",
      artist: "BDZ",
      img_src: splitpersonality,
      src: "/music/splitpersonality/allicanbe.mp3"
    },
    {
      title: "Manhunt",
      artist: "BDZ",
      img_src: splitpersonality,
      src: "/music/splitpersonality/manhunt.mp3"
    },
    {
      title: "Everywhere I Go",
      artist: "BDZ",
      img_src: splitpersonality,
      src: "/music/splitpersonality/everywhereigo.mp3"
    },
    {
      title: "Get Out My Face",
      artist: "BDZ",
      img_src: splitpersonality,
      src: "/music/splitpersonality/getoutmyface.mp3"
    },
    {
      title: "Depressed.MP3",
      artist: "BDZ",
      img_src: splitpersonality,
      src: "/music/splitpersonality/depressed.mp3"
    },
    {
      title: "Pendulum",
      artist: "BDZ",
      img_src: splitpersonality,
      src: "/music/splitpersonality/pendulum.mp3"
    },
    {
      title: "Hypnotic",
      artist: "BDZ",
      img_src: splitpersonality,
      src: "/music/splitpersonality/hypnotic.mp3"
    },
    {
      title: "Uncanny",
      artist: "BDZ",
      img_src: splitpersonality,
      src: "/music/splitpersonality/uncanny.mp3"
    },
    {
      title: "Bong Lord on the Longboard",
      artist: "BDZ",
      img_src: splitpersonality,
      src: "/music/splitpersonality/bonglordonthelongboard.mp3"
    },
    {
      title: "Castle",
      artist: "BDZ",
      img_src: splitpersonality,
      src: "/music/splitpersonality/castle.mp3"
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
