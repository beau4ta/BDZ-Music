import React from 'react';
import MusicVideo from '../../components/video/youtube';
import './videos.css'

const Videos = () => {
    return(
        <div>
        <div className='d-flex flex-wrap justify-content-center'>
            <MusicVideo />
        </div>
        <div>
            <p>for more videos<a href='https://www.youtube.com/user/QwertRules13/videos'> CLICK HERE</a></p>
        </div>
        </div>
    )
}

export default Videos;