import { Link } from 'react-router-dom'

export default function Button({ to, children, variant = 'primary', onClick, type = 'button' }) {
  const className = `btn btn--${variant}`

  if (to) {
    return <Link to={to} className={className}>{children}</Link>
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  )
}
