import React from 'react';

export function Input({
    type = 'text',
    placeholder = '',
    classList = '',
    checked = false,
    onChange = () => {},
    value = '',
    name = undefined,
}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={classList}
            onChange={onChange}
            checked={checked}
            value={value}
            name={name}
        />
    );
}
