import React from 'react';

export function Button({
    type = 'button',
    label = '',
    classList = '',
    onClick = () => {},
    iconClass = '',
}) {
    return (
        <button type={type} className={classList} onClick={onClick}>
            {label ? label : iconClass && <i className={iconClass} />}
        </button>
    );
}
