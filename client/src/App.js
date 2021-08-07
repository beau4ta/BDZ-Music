import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import Navbar from './components/navbar/navbar';
import Music from './pages/music/music';


function App() {
    return(
        <div className='App d-flex flex-column'>
            <Router>
            <Navbar />
            <Route path='/music'>
                <Music />
            </Route>
            </Router>
        </div>
    )
}

export default App;