import React from 'react';
import { ColumnLayout } from '../../global/Layout';

import Header from '../../components/header/Header';
import LandingForms from './components/LandingForms';
import LandingUser from './components/LandingUser';
import Footer from '../../components/footer/Footer';

export default function Landing() {
    return (
        <ColumnLayout dist="center spaced" className="landingContainer">
            <Header />
            <LandingForms />
            <LandingUser />
            <Footer />
        </ColumnLayout>
    );
}
