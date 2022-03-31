/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import Link from 'next/link'

import styles from './styles.module.css'

interface defaultProps {
  size?: 'default' | 'big' | 'jumbo'
  theme?: 'primary' | 'secondary'
  className?: string
  [x: string]: any
}

/** if href is there, onClick shouldn't */
/** if onClick is there, href shouldn't */
type buttonOrLinkProps =
  | { href: string, onClick?: never }
  | { href?: never, onClick?: () => void }

export type ButtonProps = defaultProps & buttonOrLinkProps

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  size = 'default',
  theme = 'primary',
  className,
  ...rest
}) => {
  const buttonClassName = clsx([
    styles.button,
    styles[`size-${size}`],
    styles[`theme-${theme}`]
  ])

  if (href) {
    return (
      <Link href={href} passHref>
        <a className={buttonClassName}>
          {children}
        </a>
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={buttonClassName}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
