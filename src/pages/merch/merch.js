import React from 'react'
import './merch.css';
import winterBliss from '../../assets/winterbliss.png'

const Merch = () => {
    return(
        <div>
            <h1 className='merch-title'>WINTER BLISS CD</h1>
            <a href='https://uhbdz.bandcamp.com/album/winter-bliss'><img className='merch-img' src={winterBliss} alt='Winter Bliss CD' /></a>
            <p className='merch-info'>Email me for details on how to get a physical copy.</p>
        </div>
    )
}

export default Merch;