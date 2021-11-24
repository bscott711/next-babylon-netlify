import React, { useRef, useState } from 'react'
import { useBeforeRender, useClick, useHover } from 'react-babylonjs'
import { Vector3, Color3 } from '@babylonjs/core'

export default function SpinningBox(props) {
    // access Babylon scene objects with same React hook as regular DOM elements
    const DefaultScale = new Vector3(1, 1, 1);
    const BiggerScale = new Vector3(1.25, 1.25, 1.25);
    const boxRef = useRef(null);
    var clockwiseRef = useRef(() => props.clockwise);
    clockwiseRef.current = props.clockwise;

    const [clicked, setClicked] = useState(false);
    useClick(
        () => setClicked(clicked => !clicked),
        boxRef
    );

    const [hovered, setHovered] = useState(false);
    useHover(
        () => setHovered(true),
        () => setHovered(false),
        boxRef
    );

    // This will rotate the box on every Babylon frame.
    var rpm = 5;
    useBeforeRender((scene) => {
        if (boxRef.current) {
            // Delta time smoothes the animation.
            const  deltaTimeInMillis = scene.getEngine().getDeltaTime();
            boxRef.current.rotation.y += (((clockwiseRef.current ? rpm: -rpm) / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000));
        }
    });

    return (<box name={props.name} ref={boxRef} size={2} position={props.position} scaling={clicked ? BiggerScale : DefaultScale} clockwise={props.clockwise}>
        <standardMaterial name={`${props.name}-mat`} diffuseColor={hovered ? props.hoveredColor : props.color} specularColor={Color3.Black()} />
    </box>);
}