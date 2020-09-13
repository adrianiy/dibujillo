import React from 'react';
import styles from './Footer.module.css';
import cls from '../../global/utils';

export default function Footer() {
    return (
        <footer data-testid="footer" className={cls(styles.footer, 'row middle center')}>
            All rights reserved &copy; 2020
        </footer>
    );
}
