import { useState, useEffect } from 'react'
import Player from '../components/player/player';
import sunnyday from '../assets/sunnyday.png';

function SunnyDay() {
  const [songs] = useState([
    {
      title: "Open Your Mind",
      artist: "BDZ",
      img_src: sunnyday,
      src: "/music/sunnyday/openyourmind.mp3"
    },
    {
      title: "Do The Most",
      artist: "BDZ",
      img_src: sunnyday,
      src: "/music/sunnyday/dothemost.mp3"
    },
    {
      title: "Can't Take It",
      artist: "BDZ",
      img_src: sunnyday,
      src: "/music/sunnyday/canttakeit.mp3"
    },
    {
      title: "Blacked Out",
      artist: "BDZ",
      img_src: sunnyday,
      src: "/music/sunnyday/blackedout.mp3"
    },
    {
      title: "Summer Nights (Instrumental)",
      artist: "BDZ",
      img_src: sunnyday,
      src: "/music/sunnyday/summernights.mp3"
    },
    {
      title: "LUVurself",
      artist: "BDZ",
      img_src: sunnyday,
      src: "/music/sunnyday/luvurself.mp3"
    },
    {
      title: "75 in the Winter",
      artist: "BDZ",
      img_src: sunnyday,
      src: "/music/sunnyday/75inthewinter.mp3"
    },
    {
      title: "Waste My Time",
      artist: "BDZ",
      img_src: sunnyday,
      src: "/music/sunnyday/wastemytime.mp3"
    },
    {
      title: "Something",
      artist: "BDZ",
      img_src: sunnyday,
      src: "/music/sunnyday/something.mp3"
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

export default SunnyDay;
