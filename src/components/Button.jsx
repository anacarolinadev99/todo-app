import React from 'react';

export function Button({
    type = 'button',
    label = '',
    classList = '',
    onClick = () => {},
}) {
    return (
        <button type={type} className={classList} onClick={onClick}>
            {label}
        </button>
    );
}
