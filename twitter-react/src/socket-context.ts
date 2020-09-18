import React from 'react';
import { Socket } from 'socket.io-client';

interface ISocketContext {
    socket: typeof Socket 
}

const SocketContext = React.createContext<ISocketContext | null>(null);

export default SocketContext

// import socketIOClient, { Socket } from 'socket.io-client';

// let socket:typeof Socket ;

// export const initiateSocket = () => {
//     socket = socketIOClient("http://localhost:8080/");
// }

// export const disconnectSocket = () => {
//     console.log('Disconnecting socket...');
//     if (socket) socket.disconnect();
// }

