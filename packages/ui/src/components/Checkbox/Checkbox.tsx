import React from 'react'
import './Checkbox.css'

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string
}

export function Checkbox({ label, className = '', ...props }: CheckboxProps) {
    const checkbox = (
        <input
            type="checkbox"
            className={`nm-checkbox ${className}`}
            {...props}
        />
    )

    if (!label) return checkbox

    return (
        <label className="nm-checkbox-container">
            {checkbox}
            <span className="nm-checkbox-label">{label}</span>
        </label>
    )
}
