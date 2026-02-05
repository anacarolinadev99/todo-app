import React from 'react';

export function InputRadio({ name, value, label, checked, onChange }) {
    return (
        <div>
            <input
                type="radio"
                id={`filter-${value}`}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={`filter-${value}`}>{label}</label>
        </div>
    );
}
