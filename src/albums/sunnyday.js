import { useState, useEffect } from 'react'
import Player from '../components/player/player';
import sunnyday from '../assets/sunnyday.png';
import openyourmind from '../assets/music/sunnyday/openyourmind.mp3';
import dothemost from '../assets/music/sunnyday/dothemost.mp3';
import canttakeit from '../assets/music/sunnyday/canttakeit.mp3';
import blackedout from '../assets/music/sunnyday/blackedout.mp3';
import summernights from '../assets/music/sunnyday/summernights.mp3';
import luvurself from '../assets/music/sunnyday/luvurself.mp3';
import inthewinter from '../assets/music/sunnyday/75inthewinter.mp3';
import wastemytime from '../assets/music/sunnyday/wastemytime.mp3';
import something from '../assets/music/sunnyday/something.mp3';

function SunnyDay() {
  const [songs] = useState([
    {
      title: "Open Your Mind",
      artist: "BDZ",
      img_src: sunnyday,
      src: openyourmind
    },
    {
      title: "Do The Most",
      artist: "BDZ",
      img_src: sunnyday,
      src: dothemost
    },
    {
      title: "Can't Take It",
      artist: "BDZ",
      img_src: sunnyday,
      src: canttakeit
    },
    {
      title: "Blacked Out",
      artist: "BDZ",
      img_src: sunnyday,
      src: blackedout
    },
    {
      title: "Summer Nights (Instrumental)",
      artist: "BDZ",
      img_src: sunnyday,
      src: summernights
    },
    {
      title: "LUVurself",
      artist: "BDZ",
      img_src: sunnyday,
      src: luvurself
    },
    {
      title: "75 in the Winter",
      artist: "BDZ",
      img_src: sunnyday,
      src: inthewinter
    },
    {
      title: "Waste My Time",
      artist: "BDZ",
      img_src: sunnyday,
      src: wastemytime
    },
    {
      title: "Something",
      artist: "BDZ",
      img_src: sunnyday,
      src: something
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
