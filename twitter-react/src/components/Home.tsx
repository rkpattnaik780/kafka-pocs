import React, { useEffect, useState } from 'react';
// import { Socket } from 'socket.io-client';
import socketIOClient, { Socket } from 'socket.io-client';
import { BarChart } from "./HorizontalBarChart";
import { PieChart } from "./PieChart";

let socket:typeof Socket = socketIOClient("http://localhost:8080/");

export const HomeComponent: React.FC<any> = (props) => {

    // console.log(props.socket);

    const [appleCount, setAppleCount] = useState<number>(0);
    const [microsoftCount, setMicrosoftCount] = useState<number>(0);

    useEffect(() => {
    console.log(socket);
    socket.on('tweet_received', function(msg: any){
        setAppleCount(msg.appleCount);
        setMicrosoftCount(msg.microsoftCount);
        });
    }, []);

    return (
        <>  
            <BarChart appleCount={appleCount} microsoftCount={microsoftCount} />
            <PieChart appleCount={appleCount} microsoftCount={microsoftCount} />
            <h1>Apple Count - {appleCount}</h1>
            <h1>Microsoft Count - {microsoftCount}</h1>
        </>     
    )
}