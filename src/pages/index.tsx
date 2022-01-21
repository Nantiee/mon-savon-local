import clsx from 'clsx'
import Image from 'next/image'

import styles from '@/assets/styles/pages/Home.module.css'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  /**
   * To reset this project to blank
   * 1. Remove the content of this page
   * 2. Remove the images from ./public/img
   * 3. Remove the style from ./src/assets/pages/Home.module.css
   */

  return (
    <div className={clsx(styles.container, 'container')}>
      <div className={styles.logos}>
        <Image
          src="/img/nextjs.svg"
          alt="NextJS logo"
          width={200}
          height={100}
        />
        <span>+</span>
        <Image
          src="/img/typescript.svg"
          alt="Typescript logo"
          width={80}
          height={80}
        />
        <span>+</span>
        <Image
          src="/img/storybook.svg"
          alt="Storybook logo"
          width={350}
          height={100}
        />
      </div>
    </div>
  )
}

export default Home
