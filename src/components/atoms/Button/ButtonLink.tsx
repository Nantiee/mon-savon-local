import Link from 'next/link'

import { buttonClassNames, DEFAULT_SHARED_PROPS } from './shared'

import type { DefaultProps } from './shared'

type ButtonLinkProps = DefaultProps & React.AnchorHTMLAttributes<HTMLAnchorElement>

/**
 * ButtonLink component.
 *
 * **Note:** It shares some props and style with `Button`.
 *
 * `import { ButtonLink } from 'path/to/Button'`
 */
const ButtonLink: React.FC<ButtonLinkProps> = ({
  size = DEFAULT_SHARED_PROPS.size,
  theme = DEFAULT_SHARED_PROPS.theme,
  children,
  className,
  href,
  ...props
}) => {
  const classNames = buttonClassNames({ className, size, theme })

  return (
    <Link
      href={href as string}
      className={classNames}
      {...props}
    >
      {children}
    </Link>
  )
}

export default ButtonLink
