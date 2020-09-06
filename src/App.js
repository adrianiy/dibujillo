import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Room from './pages/room/Room';
import Toaster from './components/toaster/Toaster';

function App() {
    return (
        <div className="App">
            <Toaster />
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/room/:hash" component={Room} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
