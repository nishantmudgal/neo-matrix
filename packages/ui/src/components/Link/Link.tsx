import React from 'react'
import './Link.css'

export type LinkVariant = 'primary' | 'ghost'

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: LinkVariant
}

export function Link({ variant = 'primary', className = '', ...props }: LinkProps) {
    return (
        <a
            className={`nm-link ${className}`}
            data-variant={variant}
            {...props}
        />
    )
}
