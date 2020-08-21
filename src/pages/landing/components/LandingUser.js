import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ColumnLayout } from '../../../global/Layout';
import UserMenu from '../../../components/user-menu/UserMenu';
import Avatar from '../../../components/avatar/Avatar';
import styles from './../Landing.module.css';

export default function LandingUser() {
    const [user] = useSelector(state => [state.user]);
    const [menuVisibility, setMenuVisibility] = useState(false);

    const _handleClick = () => {
        setMenuVisibility(!menuVisibility)
    }

    const _renderUserInfo = () => {
        return (
            <ColumnLayout data-testid="avatar" dist="center middle" className={styles.userContainer} onClick={_handleClick} >
                <Avatar image={user.imageUrl} title={user.name}/>
                { menuVisibility ? <UserMenu className={styles.landingUserMenu}/> : null }
            </ColumnLayout>
        )
    }

    return user.loggedIn ? _renderUserInfo() : null;
}
