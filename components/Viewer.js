import { Component } from 'react';
import { Engine, Scene } from 'react-babylonjs';
import { ArcRotateCamera, Vector3 } from '@babylonjs/core';
import { CreateSceneName } from '@components/createSceneName';
import { Main } from '@components/main';


export default class Viewer extends Component {

    onSceneMount(e) {
        const { scene } = e;
        const engine = scene.getEngine();
        const sceneNames = CreateSceneName(this);
        engine.displayLoadingUI();
        new ArcRotateCamera("RequiredCam", new Vector3.Up(), scene);
        Main(engine, scene, sceneNames);
    }

    render() {
        return (
            <Engine antialias adaptToDeviceRatio canvasId={this.props.canvasId}>
                <Scene onSceneMount={this.onSceneMount} scenesRoot={this.props.scenesRoot} startNum={this.props.startNum} numFiles={this.props.numFiles} filePrefix={this.props.filePrefix} />
            </Engine>)
    }
}

Viewer.defaultProps = {
    scenesRoot: "https://cdn.glitch.me/",
    startNum: 1,
    numFiles: 100,
    filePrefix: "7ce5375e-6fda-4d57-96e1-a13cdcbc8894%2Fbcell_"
}