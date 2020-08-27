import React from 'react';
import { ColumnLayout } from '../../global/Layout';

import styles from './Landing.module.css';
import Header from '../../components/header/Header';
import LandingForms from './components/LandingForms';
import LandingUser from './components/LandingUser';

export default function Landing() {
    return (
        <ColumnLayout dist="center spaced" className={styles.landingContainer}>
            <Header className={styles.landingHeader} />
            <LandingForms />
            <LandingUser />
        </ColumnLayout>
    );
}
