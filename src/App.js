import React from 'react';
import SignalList from "./components/SignalList";
import MapScreen from "./components/Map"
import {Switch, Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route component={MapScreen} path={'/map'}/>
                <Route component={SignalList} path={''}/>
            </Switch>
        </div>
    );
}

export default App;
