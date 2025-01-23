import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Sky } from '@react-three/drei';
import Cube from "./cube.jsx";
import useSocket from './useSocket';

function App() {
  const [users, setUsers] = useState({});
  const sendPosition = useSocket(setUsers);

  return (
    <Canvas vr="true">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sky sunPosition={[100, 100, 100]} />
      <Cube sendPosition={sendPosition}/>
      <OtherUsers users={users} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;