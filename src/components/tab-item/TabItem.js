import React from 'react';
import PropTypes from 'prop-types';
import cls from '../../global/utils';
import { ColumnLayout } from '../../global/Layout';
import './TabItem.css';

export default function TabItem({
    icon, active, color, className, onClick, children, testId, stepConnector,
}) {
    const _renderIcon = () => {
        const willRenderIcon = icon;

        if (willRenderIcon) {
            return (
                <em className="material-icons">{ icon }</em>
            );
        }
        return null;
    };

    const _renderStepConnector = () => {
        if (stepConnector) {
            return (
                <div className="stepConnector">
                    <span className="stepConnector-line stepConnector-horizontal" />
                </div>
            );
        }
        return null;
    };

    return (
        <ColumnLayout
            testId={testId}
            dist="center space-between"
            className={cls('tabItem', color, className, active ? 'active' : '')}
            onClick={onClick}
        >
            { _renderStepConnector() }
            { _renderIcon() }
            { children }
        </ColumnLayout>
    );
}

TabItem.propTypes = {
    icon: PropTypes.string,
    active: PropTypes.bool,
    color: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.elementType,
    testId: PropTypes.string,
    stepConnector: PropTypes.bool,
};

TabItem.defaultProps = {
    icon: '',
    active: false,
    color: '',
    className: '',
    onClick: null,
    children: null,
    testId: '',
    stepConnector: false,
};
