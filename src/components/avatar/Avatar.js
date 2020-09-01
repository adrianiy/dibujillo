import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';
import cls from '../../global/utils';

export default function Avatar({
    image, title, size, onClick,
}) {
    return (
        <div className={cls('AvatarContainer', size)} title={title} onClick={onClick}>
            <div className="Avatar">
                <img data-testid="image" src={image} alt="avatar" />
            </div>
        </div>
    );
}

Avatar.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    size: PropTypes.string,
    onClick: PropTypes.func,
};

Avatar.defaultProps = {
    title: '',
    size: 'big',
    onClick: null,
};
