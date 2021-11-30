import { ArcRotateCamera, Vector3 } from '@babylonjs/core';
import { CreateSceneName } from '@components/createSceneName';
import { Main } from '@components/main';
import { Component } from 'react';
import { Engine, Scene } from 'react-babylonjs';

export default class BJSViewer extends Component {

    onSceneMount() {
        const { engine } = this.engineCanvasContext;
        const scene = engine.scenes[0];
        engine.displayLoadingUI();
        var sceneNames = CreateSceneName();
        new ArcRotateCamera("RequiredCam", new Vector3.Up(), scene);
        Main(engine, scene, sceneNames);
    }

    render() {
        return (
            <Engine antialias adaptToDeviceRatio canvasId={this.props.canvasId}>
                <Scene onSceneMount={this.onSceneMount} />
            </Engine>)
    }
}