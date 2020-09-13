import React from 'react';
import PropTypes from 'prop-types';
import cls from '../../global/utils';
import { RowLayout } from '../../global/Layout';
import './Button.css';

export default function Button({
    icon, color, className, onClick, children, testId,
}) {
    const _renderIcon = () => {
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
            testId={testId}
            dist="middle"
            className={cls('button', color, className)}
            onClick={onClick}
        >
            { _renderIcon() }
            { children }
        </RowLayout>
    );
}

Button.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    testId: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

Button.defaultProps = {
    icon: '',
    color: '',
    className: '',
    onClick: null,
    children: null,
    testId: '',
};
