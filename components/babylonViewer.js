import { CreateSceneName } from '@components/createSceneName'
import { Main } from '@components/main'

export default function BabylonViewer(e) {
    let sceneNames = CreateSceneName();
    console.log(sceneNames)
    const { scene, canvas } = e
    console.log(e)
    console.log('wtf')
    let camera = Main(scene, sceneNames);
}
