import { ArcRotateCamera, Vector3 } from '@babylonjs/core';
import { CreateSceneName } from '@components/createSceneName';
import { Main } from '@components/main';
import { onSceneMount } from 'react-babylonjs';


export default function Viewer(props) {

    return (onSceneMount((engine,scene) => {
        new ArcRotateCamera("RequiredCam", new Vector3.Up(), scene);
        Main(engine, scene, CreateSceneName(props))
    }))
}

export { Viewer }
