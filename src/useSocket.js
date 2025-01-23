import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const SERVER_URL = 'http://localhost:3001';

export default function useSocket(onUpdateUsers) {
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io(SERVER_URL);

    // Listen for updates from the server
    socketRef.current.on('update-users', onUpdateUsers);

    return () => {
      socketRef.current.disconnect();
    };
  }, [onUpdateUsers]);

  const sendPosition = (position) => {
    socketRef.current.emit('update-position', position);
  };

  return sendPosition;
}
