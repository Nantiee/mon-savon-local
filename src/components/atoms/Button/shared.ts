import clsx from 'clsx'

import styles from './styles.module.css'

export interface DefaultProps {
  /**
   * Size of the button.
   * @default 'default'
   */
  size?: 'default' | 'big' | 'jumbo'
  /**
   * Theme of the button.
   * @default 'primary'
   */
  theme?: 'primary' | 'secondary'
  className?: string
}

type RequiredDefaultProps = Required<Pick<DefaultProps, 'size' | 'theme'>> & DefaultProps

export const DEFAULT_SHARED_PROPS: RequiredDefaultProps = {
  size: 'default',
  theme: 'primary'
}

export const buttonClassNames = ({
  size = DEFAULT_SHARED_PROPS.size,
  theme = DEFAULT_SHARED_PROPS.theme,
  className
}: RequiredDefaultProps) => {
  return clsx([
    styles.button,
    styles[`size-${size}`],
    styles[`theme-${theme}`],
    className
  ])
}
