'use client';

import { useState, useEffect } from 'react';
let socket:any;

const SocketComponent = () => {
  const [data, setData] = useState<{[key:string]: any}>({});

    const initSocket = async () => {
      const ioClient = await import('socket.io-client');
      socket = ioClient.io();
      socket.on('connect', () => {
        console.log('socket connected')
      });
  
      socket.on('get_overview:response', (data:any) => {
        console.log('get overview resp: ', data)
        setData(data);
      });
      socket.emit('get_overview');     
    }
    useEffect(() => {
      initSocket();
      return () => {
        socket && socket.disconnect();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div>
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
  );
};

export default SocketComponent;