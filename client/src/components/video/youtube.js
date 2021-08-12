import React from 'react';
import YouTube from 'react-youtube';
import { videos } from '../../videoData';
import './video.css';

class MusicVideo extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return videos.map(video =>
        <div className='video'>
            <h1 className='video-title'>{video.title}</h1>
        <YouTube 
        className='video-inside'
        videoId={video.videoId} 
        opts={opts} 
        onReady={this._onReady} 
        />
        </div> 
    )
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default MusicVideo;
