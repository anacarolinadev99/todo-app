import React from 'react';

export function Button({
    type = 'button',
    label = '',
    classList = '',
    onClick = () => {},
    iconClass = '',
    disbled = false,
}) {
    return (
        <button
            type={type}
            className={classList}
            onClick={onClick}
            disabled={disbled}
        >
            {label ? label : iconClass && <i className={iconClass} />}
        </button>
    );
}
