import Image from 'next/image';
import styles from '@styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made with&nbsp;
      <Image
        priority
        src="/netliheart.svg"
        alt={"Netlify Logo"}
        className={styles.logo}
        width={20}
        height={20}
      />
      &nbsp;by<strong>&nbsp;MinesBioImaging</strong>
    </footer>
  )
}

export { Footer }
