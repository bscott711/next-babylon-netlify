import Layout from '@components/layout';
import NonDeclarativeScene from '@scenes/nonDeclarativeScene:';

export default function ChangeFocus() {
    return (
        <Layout title={'Nondeclarative Example'}>
            <strong>Example from the create-react-babylon github repo</strong>
            <NonDeclarativeScene />
        </Layout>
    )
}
