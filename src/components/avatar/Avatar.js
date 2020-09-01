import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

export default function Avatar({ image, title }) {
    return (
        <div className="AvatarContainer" title={title}>
            <div className="Avatar">
                <img data-testid="image" src={image} alt="avatar" />
            </div>
        </div>
    );
}

Avatar.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
};

Avatar.defaultProps = {
    title: '',
};
