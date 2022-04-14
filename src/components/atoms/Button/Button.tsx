import { DefaultProps, buttonClassNames, DEFAULT_SHARED_PROPS } from './shared'

type ButtonProps = DefaultProps & React.ButtonHTMLAttributes<HTMLButtonElement>

/**
 * Button component.
 *
 * **Note:** It shares some props and style with `ButtonLink`.
 *
 * `import Button from 'path/to/Button'` or `import { Button } from 'path/to/Button'`
 */
const Button: React.FC<ButtonProps> = ({
  size = DEFAULT_SHARED_PROPS.size,
  theme = DEFAULT_SHARED_PROPS.theme,
  children,
  className,
  ...props
}) => {
  const classNames = buttonClassNames({ className, size, theme })

  return (
    <button
      className={classNames}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
