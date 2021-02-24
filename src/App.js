import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Landing from './pages/landing/Landing';
import Room from './pages/room/Room';
import Toaster from './components/toaster/Toaster';
import cls from './global/utils';

function App() {
    const user = useSelector((state) => state.user);

    const testCall = async () => {
        const result = await fetch('https://www.zara.com/es/en/-p0.html?v1=85788265&&ajax=true');
        console.log(result);
    };

    testCall();

    return (
        <div className={cls('App', user.theme)}>
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
