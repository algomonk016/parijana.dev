interface ButtonProps {
  variant: 'primary' | 'ghost' | 'outline'
  href?: string
  children: React.ReactNode
  className?: string
}

export function Button({ variant, href, children, className = '' }: ButtonProps) {
  const cls = `btn btn--${variant} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={cls}>
      {children}
    </button>
  )
}
