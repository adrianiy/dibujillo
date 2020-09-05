import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ColumnLayout } from '../../../global/Layout';
import UserMenu from '../../../components/user-menu/UserMenu';
import Avatar from '../../../components/avatar/Avatar';
import '../Landing.css';

export default function LandingUser() {
    const user = useSelector((state) => state.user);
    const [menuVisibility, setMenuVisibility] = useState(false);

    const _handleClick = () => {
        setMenuVisibility(!menuVisibility);
    };

    const _renderUserInfo = () => (
        <ColumnLayout dist="center middle" className="userContainer">
            <Avatar testId="avatar" image={user.imageUrl} title={user.name} onClick={_handleClick} />
            { menuVisibility ? <UserMenu className="landingUserMenu" closeCallback={() => setMenuVisibility(false)} /> : null }
        </ColumnLayout>
    );

    return user.loggedIn ? _renderUserInfo() : null;
}
