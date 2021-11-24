import Link from 'next/link';

export default function NavBar() {
    return (
        <header>
            <nav>
                <Link href="/">
                    <button>Home</button>
                </Link>
                <Link href="/changefocus">
                    <button>BrianZinn Ex.</button>
                </Link>
            </nav>
        </header>
    )
}