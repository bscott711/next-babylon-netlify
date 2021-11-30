import { ArcRotateCamera, Vector3 } from '@babylonjs/core';
import { CreateSceneName } from '@components/createSceneName';
import { Main } from '@components/main';
import { Component } from 'react';
import { Scene } from 'react-babylonjs';

export default class BJSViewer extends Component {
    onSceneMount(e) {
        const { scene } = e
        const engine = scene.getEngine();
        engine.displayLoadingUI();
        var sceneNames = CreateSceneName();
        new ArcRotateCamera("RequiredCam", new Vector3.Up(), scene);
        Main(engine, scene, sceneNames);
    }

    render() {
        return (
            <Scene
                onSceneMount={this.onSceneMount}
            />)
    }
}