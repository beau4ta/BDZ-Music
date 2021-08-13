import React from 'react'
import './shows.css';
import openMic from '../../assets/openmicevent.png';

const Shows = () => {
    return(
        <div>
            <h1 className='shows-title'>OPEN MIC NIGHT, 08/18/2021 @ 7:00pm</h1>
            <a href='https://lorainpalace.com/open-mic-night-august-18th-at-700-pm-5/'><img className='shows-img' src={openMic} alt='open mic night'/></a>
        </div>
    )
}

export default Shows;