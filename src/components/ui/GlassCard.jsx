export default function GlassCard({ children, className = '', hover = true, as: Tag = 'div', ...props }) {
  return (
    <Tag
      className={`glass rounded-2xl shadow-glass ${
        hover ? 'transition-all duration-300 hover:border-white/20 hover:-translate-y-1' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
