const variants = {
  solid:
    'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-glow-indigo hover:brightness-110',
  glass: 'glass text-mist-100 hover:bg-white/[0.08] hover:border-white/20',
  ghost: 'text-mist-300 hover:text-mist-100',
}

export default function Button({
  as: Tag = 'a',
  variant = 'solid',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  children,
  ...props
}) {
  return (
    <Tag
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon size={16} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </Tag>
  )
}
