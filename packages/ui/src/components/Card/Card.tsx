import React from 'react'
import './Card.css'

export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

export type CardProps = {
    padding?: CardPadding
    children: React.ReactNode
    className?: string
}

export function Card({
    padding = 'md',
    children,
    className = '',
    ...props
}: CardProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={`nm-card ${className}`}
            data-padding={padding}
            {...props}
        >
            {children}
        </div>
    )
}
