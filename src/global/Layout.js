/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import cls from './utils';

export const RowLayout = ({
    testId, dist, className, style, onClick, children,
}) => (
    <div
        data-testid={testId}
        className={cls('row', dist, className)}
        style={style}
        onClick={onClick}
    >
        { children }
    </div>
);

export const ColumnLayout = ({
    testId, dist, className, style, onClick, children,
}) => (
    <div
        data-testid={testId}
        className={cls('column', dist, className)}
        style={style}
        onClick={onClick}
    >
        {children}
    </div>
);

const propTypes = {
    testId: PropTypes.string,
    dist: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.object),
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

const defaultProps = {
    testId: '',
    dist: '',
    className: '',
    style: {},
    onClick: null,
    children: null,
};

RowLayout.propTypes = propTypes;
ColumnLayout.propTypes = propTypes;
RowLayout.defaultProps = defaultProps;
ColumnLayout.defaultProps = defaultProps;
