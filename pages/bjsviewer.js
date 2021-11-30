import Layout from '@components/layout';
import BJSViewer from '@components/BJSViewer';

export default function OrigViewer() {
    return (
        <Layout title={'BJSViewer'}>
            <strong>Nondeclaritive BabylonViewer </strong>
            <BJSViewer canvasId={'renderCanvas'} startNum={10} numFiles={50} />
        </Layout>
    )
}
