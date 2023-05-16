import clsx from 'clsx'
import Image from 'next/image'

import styles from '@/assets/styles/pages/Home.module.css'
import Hero from '@/components/organisms/hero'

export default function Home () {
  /**
   * To reset this project to blank
   * 1. Remove the content of this page
   * 2. Remove the images from ./public/img
   * 3. Remove the style from ./src/assets/pages/Home.module.css
   * 4. If you want to use the app directory remove the pages directory
   */

  return (
    <div className={clsx(styles.container, 'container')}>
      <Hero
        title='Mon savon local'
      />
      <div className={styles.logos}>
        <Image
          src='/img/nextjs.svg'
          alt='NextJS logo'
          width={200}
          height={100}
        />
        coucou
        <span>+</span>
        <Image
          src='/img/typescript.svg'
          alt='Typescript logo'
          width={80}
          height={80}
        />
        <span>+</span>
        <Image
          src='/img/storybook.svg'
          alt='Storybook logo'
          width={350}
          height={100}
        />
      </div>
    </div>
  )
}
