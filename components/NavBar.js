import Link from 'next/link';
import styles from '@styles/navbar.module.css'

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>sRBC Examples</button>
                <div className={styles.dropdown_content}>
                    <Link href="/" passHref>Many floating cells</Link>
                    <Link href="/srbc1" passHref>Single event</Link>
                    <Link href="/srbc2" passHref>Excess ruffling</Link>
                </div>
            </div>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Bcell Example</button>
                <div className={styles.dropdown_content}>
                    <Link href="/localviewer" passHref>Surface colored as motion</Link>
                </div>
            </div>
        </div>
    )
}

export { NavBar }