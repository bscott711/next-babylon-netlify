import { Engine, Scene } from 'react-babylonjs';
import BJSViewer from '@components/BJSViewer';

export default function BabylonViewerScene() {
    return (
        <Engine antialias adaptToDeviceRatio canvasId='renderCanvas'>
            <Scene onSceneMount={BJSViewer}/>
        </Engine>
    )
}