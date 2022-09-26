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
                <button className={styles.dropbtn}>mRBC Examples</button>
                <div className={styles.dropdown_content}>
                    <Link href="/mrbc1" passHref>mRBC Smooth</Link>
                    <Link href="/mrbc2" passHref>mRBC 2 </Link>
                    <Link href="/mrbc_Miap" passHref>mRBC Miap</Link>
                </div>
            </div>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Bcell Example</button>
                <div className={styles.dropdown_content}>
                    <Link href="/localviewer" passHref>Surface colored as motion</Link>
                    <Link href="/eat_d3HL60" passHref> Eat d3HL60</Link>
                    <Link href="/eat_d3HL60_glitch" passHref> Eat d3HL60 Glitch</Link>
                </div>
            </div>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>dHL60 Motion</button>
                <div className={styles.dropdown_content}>
                    <Link href="/dhl60_day2" passHref>Day 2 </Link>
                    <Link href="/dhl60_day3" passHref>Day 3 </Link>
                    <Link href="/dhl60_day4" passHref>Day 4 </Link>
                    <Link href="/dhl60_day5" passHref>Day 5 </Link>
                    <Link href="/dhl60_day6" passHref>Day 6 </Link>
                </div>
            </div>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>AktPH Surface Int</button>
                <div className={styles.dropdown_content}>
                    <Link href="/csf_starve" passHref>CSF-1 Starved</Link>
                    <Link href="/csf_stim" passHref>CSF-1 Stimulation</Link>
                </div>
            </div>
        </div>
    )
}

export { NavBar }