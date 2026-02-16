import React from 'react'
import './Input.css'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export function Input({ className = '', ...props }: InputProps) {
    return (
        <input
            className={`nm-input ${className}`}
            {...props}
        />
    )
}
