import clsx from 'clsx'

import styles from './styles.module.css'

interface IconProps {
  name: string
  className?: string
}

const Icon: React.FC<IconProps> = ({ name, className = '' }) => {
  const classNames = clsx(styles.icon, className)
  return (
    <svg className={classNames}>
      <use href={`icons.svg#${name}`} />
    </svg>
  )
}

export default Icon
