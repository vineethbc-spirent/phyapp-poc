'use client';

import { useEffect, useState } from 'react'

let socket: any;

const SocketComponent = () => {
    const [data, setData] = useState<{ [key: string]: any }>({});

    useEffect(() => {
        socketInitializer()
        return () => {
            socket && socket.disconnect();
        }
    }, [])

    const socketInitializer = async () => {
        await fetch('/api/socket')
        const ioClient = await import('socket.io-client');
        socket = ioClient.io();

        socket.on('connect', () => {
            console.log('socket connected')
        });

        socket.on('get_overview:response', (data: any) => {
            console.log('get overview resp: ', data)
            setData(data);
        });
        socket.emit('get_overview');
    }

    return <div>
        <h1>Polling Server Component</h1>
        {
            Object.keys(data).map(key => {
                const rec = data[key];
                const { gen_port_stats } = rec;
                return (
                    <div key={key}>{gen_port_stats[0]}</div>
                );
            })
        }
    </div>
}

export default SocketComponent;