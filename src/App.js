import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import Navbar from './components/navbar/navbar';
import Music from './pages/music/music';
import About from './pages/about/about';
import Merch from './pages/merch/merch';
import Shows from './pages/shows/shows';
import Videos from './pages/videos/videos';
import Footer from './components/footer/footer';
import Contact from './pages/contact/contact';


function App() {
    return(
        <div className='App d-flex flex-column'>
            <Router>
            <Navbar />
            <Route path='/about'>
                <About/>
            </Route>
            <Route path='/music'>
                <Music />
            </Route>
            <Route path='/merch'>
                <Merch />
            </Route>
            <Route path='/shows'>
                <Shows />
            </Route>
            <Route path='/videos'>
                <Videos />
            </Route>
            <Route path='/contact'>
                <Contact />
            </Route>
            <Footer />
            </Router>
        </div>
    )
}

export default App;