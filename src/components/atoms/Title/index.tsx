/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import clsx from 'clsx'

import styles from './styles.module.css'

export interface TitleProps {
  children: React.ReactNode
  tag?: keyof JSX.IntrinsicElements
  size?: 'big' | 'jumbo' | 'small' | 'default' | 'x-small'
  spacing?: 'big' | 'jumbo' | 'small' | 'default' | 'x-small'
  theme?: 'blue' | 'black' | 'white'
  id?: string
  className?: string
}

/**
* Title component
*/
const Title = ({
  children,
  tag = 'h2',
  size = 'default',
  spacing = 'default',
  theme = 'blue',
  id,
  className = ''
}: TitleProps) => {
  const CustomTag = `${tag}` as keyof JSX.IntrinsicElements

  const classNames = clsx([
    styles.title,
    styles[`size-${size}`],
    styles[`spacing-${spacing}`],
    styles[`theme-${theme}`],
    className
  ])

  return (
    <CustomTag id={id} className={classNames}>{children}</CustomTag>
  )
}

export default Title
