import Title from '@/components/atoms/Title'

import styles from './styles.module.css'

interface HeroProps {
  title: string
}

const Hero = ({
  title
}: HeroProps) => {
  return (
    <div className={

      styles.hero
}
    >
      <Title
        tag='h1'
        size='jumbo'
        theme='black'
      >{title}
      </Title>
    </div>
  )
}

export default Hero
