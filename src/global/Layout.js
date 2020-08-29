/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import cls from './utils';

const RowLayoutFunc = ({
    testId, dist, className, style, onClick, children,
}, ref) => (
    <div
        ref={ref}
        data-testid={testId}
        className={cls('row', dist, className)}
        style={style}
        onClick={onClick}
    >
        { children }
    </div>
);

const ColumnLayoutFunc = ({
    testId, dist, className, style, onClick, children,
}, ref) => (
    <div
        ref={ref}
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

RowLayoutFunc.propTypes = propTypes;
ColumnLayoutFunc.propTypes = propTypes;
RowLayoutFunc.defaultProps = defaultProps;
ColumnLayoutFunc.defaultProps = defaultProps;

export const ColumnLayout = forwardRef(ColumnLayoutFunc);
export const RowLayout = forwardRef(RowLayoutFunc);
