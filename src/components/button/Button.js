import React from 'react';
import PropTypes from 'prop-types';
import cls from '../../global/utils';
import { RowLayout } from '../../global/Layout';
import './Button.css';

export default function Button({
    icon, color, className, onClick, children,
}) {
    const renderIcon = () => {
        const willRenderIcon = icon;

        if (willRenderIcon) {
            return (
                <em className="material-icons-outlined">{ icon }</em>
            );
        }
        return null;
    };

    return (
        <RowLayout
            dist="middle space-between"
            className={cls('button', color, className)}
            onClick={onClick}
        >
            { renderIcon() }
            { children }
        </RowLayout>
    );
}

Button.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.elementType,
};

Button.defaultProps = {
    icon: '',
    color: '',
    className: '',
    onClick: null,
    children: null,
};
