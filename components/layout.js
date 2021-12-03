import Header from '@components/Header';
import Footer from '@components/Footer';
import NavBar from '@components/NavBar';

export default function Layout({
    children,
    title = 'The all new BabylonJS-Viewer!',
}) {
    return (
        <div>
            <Header title={title} />
            <NavBar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export { Layout }