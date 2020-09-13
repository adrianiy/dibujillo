import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ColumnLayout } from '../../../global/Layout';
import UserMenu from '../../../components/user-menu/UserMenu';
import Avatar from '../../../components/avatar/Avatar';
import useClickAwayEffect from '../../../global/effects/ClickAwayEffect';
import '../Landing.css';

export default function LandingUser() {
    const user = useSelector((state) => state.user);
    const [menuVisibility, setMenuVisibility] = useState(false);

    // istanbul ignore next func
    useClickAwayEffect(['.userContainer'], () => setMenuVisibility(false));

    const _handleClick = () => {
        setMenuVisibility(!menuVisibility);
    };

    const _renderUserInfo = () => (
        <ColumnLayout dist="center middle" className="userContainer">
            <Avatar testId="avatar" image={user.imageUrl} title={user.name} onClick={_handleClick} />
            { menuVisibility ? (
                <UserMenu
                    className="landingUserMenu"
                />
            ) : null }
        </ColumnLayout>
    );

    return user.loggedIn ? _renderUserInfo() : null;
}
