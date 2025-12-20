import './Button.css'

export type ButtonVariant = 'primary' | 'secondary'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function Button({
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      data-variant={variant}
      data-size={size}
      className="nm-button"
      {...props}
    />
  )
}
