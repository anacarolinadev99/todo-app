import React from 'react';

export function InputRadio({ name, value, label, checked, onChange }) {
    return (
        <div className="filter-item">
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
