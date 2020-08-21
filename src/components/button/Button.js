import React from 'react';
import { cls } from '../../global/utils';
import { RowLayout } from '../../global/Layout';
import './Button.css';

export function Button(props) {
    const renderIcon = () => {
        const willRenderIcon = props.icon;

        if (willRenderIcon) {
            return (
                <em className="material-icons-outlined">{ props.icon }</em>
            )
        } else {
            return null;
        }
    }

    return (
        <RowLayout
            dist="middle space-between"
            className={ cls( 'button', props.color, props.className) }
            onClick={ props.onClick }
        >
            { renderIcon() }
            { props.children }
        </RowLayout>
    )
}
