import React from 'react';
import PropTypes from 'prop-types';
import cls from '../../global/utils';
import './Toggler.css';
import { RowLayout } from '../../global/Layout';

export default function Toggler({ status, handleToggle, testId }) {
    return (
        <RowLayout
            dist="middle"
            testId={testId}
            className={cls('togglerContainer', status ? 'active' : '')}
            onClick={handleToggle}
        >
            <RowLayout dist="middle center" className={cls('toggler', status ? 'active' : '')}>
                <div className="verticalLine" />
                <div className="verticalLine" />
                <div className="verticalLine" />
            </RowLayout>
        </RowLayout>
    );
}

Toggler.propTypes = {
    status: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired,
    testId: PropTypes.string,
};

Toggler.defaultProps = {
    testId: '',
};
