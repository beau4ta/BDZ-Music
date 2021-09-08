import React, { Component } from 'react'
import Beau from '../../assets/beaufuneral3.JPG';
import './about.css';

class About extends Component {
    render(){
        return(
            <div className='about-container d-flex justify-content-center'>
                <div className='info-img d-flex justify-content-center align-items-center'>
                <div className='image-container col-4'>
                    <img className='beau' src={Beau} alt='Beau Fortier'/>
                </div>
                <div className='info-container d-flex flex-column justify-content-center flex-wrap col-4'>
                    <h3 className='info-title'>HELLO THERE!</h3>
                    <p className='info-body'>
                        My Name is Beau Fortier. I go by the name of BDZ. 
                        I am 25 years old and I am from Lorain, Ohio. 
                        I started writing when I was 14 years old and 
                        I have been producing music ever since I was 19.
                        Music is my passion and my therapy. I play guitar 
                        and piano, make beats, and write all my own material.
                        Here in this website I have created, you will find a 
                        few different pages containing content such as my music, 
                        merchandise you can buy, dates for any shows I will be
                        performing, and contact information to get in touch with 
                        me about collaborating. Feel free to browse the site and 
                        check out my music. Thank you for all your support and 
                        taking the time to be here right now. I hope you enjoy 
                        the music and share it with your friends!
                        </p>
                        <p className='icons'>
                            <a href='https://www.youtube.com/channel/UCbyhz58JZU97FRZCKFZGRHg'><i className="fab fa-youtube px-2"></i></a>
                            <a href='https://www.facebook.com/uhBDZ'><i className="fab fa-facebook px-2"></i></a>
                            <a href='https://soundcloud.com/beau-fortier-1'><i class="fab fa-soundcloud px-2"></i></a>
                            <a href='https://uhbdz.bandcamp.com/'><i class="fab fa-bandcamp px-2"></i></a>
                            <a href='https://www.instagram.com/uhbdz/'><i class="fab fa-instagram px-2"></i></a>
                            <a href='https://music.apple.com/us/artist/bdz/1523540515'><i class="fab fa-apple px-2"></i></a>
                            <a href='https://open.spotify.com/artist/5rhYi2DHQNwkzHU5400bpN'><i class="fab fa-spotify px-2"></i></a>
                            

                            </p>
                </div>
                </div>
            </div>
        )
    }
}

export default About;