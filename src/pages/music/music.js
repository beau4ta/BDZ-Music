import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DripHam from '../../albums/dripham';
import NewTape from '../../albums/newtape';
import SplitPersonality from '../../albums/splitpersonality';
import SunnyDay from '../../albums/sunnyday';
import WinterBliss from '../../albums/winterbliss';
import Albums from '../../components/album/album';

const Music = () => {
    return(
        <div>
            <Router>
            <Route path='/music/winterbliss'>
                    <WinterBliss />
                </Route>
                <Route path='/music/dripham'>
                    <DripHam />
                </Route>
                <Route path='/music/sunnyday'>
                    <SunnyDay />
                </Route>
                <Route path='/music/newtape'>
                    <NewTape />
                </Route>
                <Route path='/music/splitpersonality'>
                    <SplitPersonality />
                </Route>
                <Albums />
            </Router>
        </div>
    )
}

export default Music;