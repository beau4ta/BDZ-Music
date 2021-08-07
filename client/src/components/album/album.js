import React from 'react';
import './album.css';
import { albums } from '../../albumData';

const Albums = () => {
    return (
        <div className='album-main-container d-flex flex-wrap justify-content-center align-items-center container-fluid'>
            {albums.map((album) => (
                <div className='album-container d-flex col-4'>
                    <a href={album.link} key={album.image} className="album-link">
                        <div className='image-container'>
                            <img
                                alt={album.title}
                                className='album-image'
                                src={album.image}
                            />
                            </div>
                            <div className='info-container'>
                            <h1 className='album-main-title'>
                                {album.title}
                            </h1>
                            <h2 className='album-sub-title'>
                                {album.subtitle}
                            </h2>
                        </div>
                    </a>
                </div>
            ))}
        </div>

    )
}

export default Albums;