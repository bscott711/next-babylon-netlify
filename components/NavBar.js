import Link from 'next/link';
import styles from '@styles/navbar.module.css'

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Pages</button>
                <div className={styles.dropdown_content}>
                    <Link href="/" passHref>One spinning box</Link>
                    <Link href="/boxes" passHref>Twwwoo spinning boxes</Link>
                    <Link href="/changefocus" passHref>Change Focus</Link>
                    <Link href="/babylonviewer" passHref>Babylon Viewer</Link>
                </div>
            </div>
        </div>
    )
}

export { NavBar }