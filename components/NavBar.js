import Link from 'next/link';

export default function NavBar() {
    return (
        <header>
            <nav>
                <Link href="/" passHref>
                    <button>Home</button>
                </Link>
                <Link href="/babylonviewer" passHref>
                    <button>Babylon Viewer</button>
                </Link>
                <Link href="/bjsviewer" passHref>
                    <button>Orig Viewer</button>
                </Link>
            </nav>
        </header>
    )
}

export { NavBar }