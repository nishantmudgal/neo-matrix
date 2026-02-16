import React from 'react'
import './Icon.css'

export type IconSize = 'sm' | 'md' | 'lg' | 'xl'

export type IconProps = {
    size?: IconSize
    color?: string
    children: React.ReactNode
    className?: string
}

export function Icon({
    size = 'md',
    color,
    children,
    className = '',
    ...props
}: IconProps & React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <span
            className={`nm-icon ${className}`}
            data-size={size}
            style={{ color: color || 'inherit', ...props.style }}
            {...props}
        >
            {children}
        </span>
    )
}
