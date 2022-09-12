import { Component } from 'react';
import SceneComponent from 'babylonjs-hook';
import { ArcRotateCamera, Vector3 } from '@babylonjs/core';
import { CreateSceneName } from '@components/createSceneName';
import { Main } from '@components/main';


export default class Viewer extends Component {
    onSceneReady(scene) {
        const engine = scene.getEngine();
        engine.displayLoadingUI();
        new ArcRotateCamera("RequiredCam", new Vector3(0, 1, 0), scene);
        const sceneNames = CreateSceneName(this);
        console.log(sceneNames)
        Main(engine, scene, sceneNames);
    }

    render() {
        return (
            <SceneComponent antialias adaptToDeviceRatio id={this.props.canvasId} onSceneReady={this.onSceneReady} root={this.props.root} startnum={this.props.startnum} numfiles={this.props.numfiles} prefix={this.props.prefix} />
        )
    }
}

Viewer.defaultProps = {
    root: "https://cdn.glitch.me/",
    startnum: 1,
    numfiles: 100,
    prefix: "7ce5375e-6fda-4d57-96e1-a13cdcbc8894%2Fbcell_"
}