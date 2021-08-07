import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WinterBliss from '../../albums/winterbliss';
import Albums from '../../components/album/album';

const Music = () => {
    return(
        <div>
            <Router>
                <Albums />
                <Route path='/music/winterbliss'>
                    <WinterBliss />
                </Route>
            </Router>
        </div>
    )
}

export default Music;