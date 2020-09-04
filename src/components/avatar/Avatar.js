import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';
import cls from '../../global/utils';

export default function Avatar({
    image, gradient, title, size, onClick,
}) {
    return (
        <div className={cls('AvatarContainer', size, gradient ? 'gradient' : '')} title={title} onClick={onClick}>
            <div className="Avatar">
                <img data-testid="image" src={image} alt="avatar" />
            </div>
        </div>
    );
}

Avatar.propTypes = {
    image: PropTypes.string.isRequired,
    gradient: PropTypes.bool,
    title: PropTypes.string,
    size: PropTypes.string,
    onClick: PropTypes.func,
};

Avatar.defaultProps = {
    title: '',
    gradient: true,
    size: 'big',
    onClick: null,
};
