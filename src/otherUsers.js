import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function OtherUsers({ users }) {
  const sphereRefs = useRef({});

  useFrame(() => {
    Object.values(sphereRefs.current).forEach((ref) => {
      if (ref) {
        ref.rotation.y += 0.02;
        ref.rotation.x += 0.01;
      }
    });
  });

  return (
    <>
      {Object.entries(users).map(([id, position]) => (
        <mesh
          key={id}
          position={[position.x, position.y, position.z]}
          ref={(el) => (sphereRefs.current[id] = el)}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial color='blue' />
        </mesh>
      ))}
    </>
  );
}

export default OtherUsers;
