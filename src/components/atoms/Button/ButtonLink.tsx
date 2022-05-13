/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'

import { DefaultProps, buttonClassNames, DEFAULT_SHARED_PROPS } from './shared'

type ButtonLinkProps = DefaultProps & React.AnchorHTMLAttributes<HTMLAnchorElement>

/**
 * ButtonLink component.
 *
 * **Note:** It shares some props and style with `Button`.
 *
 * `import { ButtonLink } from 'path/to/Button'`
 */
const ButtonLink = ({
  size = DEFAULT_SHARED_PROPS.size,
  theme = DEFAULT_SHARED_PROPS.theme,
  children,
  className,
  href,
  ...props
}: ButtonLinkProps) => {
  const classNames = buttonClassNames({ className, size, theme })

  return (
    <Link href={href as string} passHref>
      <a
        className={classNames}
        {...props}
      >
        {children}
      </a>
    </Link>
  )
}

export default ButtonLink
