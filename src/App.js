import React from 'react';
import './App.css';
import Landing from './pages/landing/Landing';
import Footer from './components/footer/Footer';
import Toaster from './components/toaster/Toaster';

function App() {
    return (
        <div className="App">
            <Toaster />
            <Landing />
            <Footer />
        </div>
    );
}

export default App;
