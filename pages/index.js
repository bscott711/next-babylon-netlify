import Layout from '@components/layout';
import SpinningBoxScene from '@scenes/SpinningBoxScene:';

export default function Home() {
    return (
        <Layout title={'The all new BabylonJS-Viewer'}>
            <strong> Welcome to the future of interactive data!</strong>
            <SpinningBoxScene />
        </Layout>
    );
}