import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useDrag } from '@use-gesture/react';

function Cube({ sendPosition }) {
    const meshRef = useRef();

    const bind = useDrag(({ offset: [x, y] }) => {
        if (meshRef.current) {
            meshRef.current.position.x = x / 100;
            meshRef.current.position.y = -y / 100;
            sendPosition({
                x: meshRef.current.position.x,
                y: meshRef.current.position.y,
                z: meshRef.current.position.z,
            });
        }
    });

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 1, 0]} {...bind()}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
}

export default Cube;