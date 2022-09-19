import dynamic from 'next/dynamic'

import type { IconName } from '@/types/icons'

interface IconProps {
  name: IconName
  className?: string
}

const DynamicIcon = ({ name, className = '' }: IconProps) => {
  const Icon: React.ComponentType<{ className: string }> =
    dynamic(async () => await import('@/components/icons').then((mod) => mod[name]))

  return <Icon className={className} aria-hidden />
}

export default DynamicIcon
