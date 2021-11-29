import { Engine, Scene } from 'react-babylonjs';
import BabylonViewer from '@components/babylonViewer'

export default function BabylonViewerScene() {
    return (
        <Engine antialias adaptToDeviceRatio canvasId='renderCanvas'>
            console.log('hello')
            <Scene onSceneMount={BabylonViewer} />
        </Engine>
    )
}