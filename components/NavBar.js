import Link from 'next/link';

export default function NavBar() {
    return (
        <header>
            <nav>
                <Link href="/">
                    <button>Home</button>
                </Link>
                <Link href="/babylonviewer">
                    <button>Babylon Viewer</button>
                </Link>
                <Link href="/changefocus">
                    <button>Changing Focus</button>
                </Link>
            </nav>
        </header>
    )
}