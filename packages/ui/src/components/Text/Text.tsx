import React from 'react'
import './Text.css'

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type TextWeight = 'normal' | 'medium' | 'bold'

export type TextProps = {
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label'
  size?: TextSize
  weight?: TextWeight
  children: React.ReactNode
  className?: string
}

export function Text({
  as: Component = 'p',
  size = 'md',
  weight = 'normal',
  children,
  className = '',
  ...props
}: TextProps & React.HTMLAttributes<HTMLElement>) {
  return (
    <Component
      className={`nm-text ${className}`}
      data-size={size}
      data-weight={weight}
      {...props}
    >
      {children}
    </Component>
  )
}
