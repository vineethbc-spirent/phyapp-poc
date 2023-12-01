"use client";

import { useState, useEffect } from 'react';

const PollingServerComponent = () => {
  const [data, setData] = useState<{[key:string]: any}>({});

    useEffect(() => {
      const interval = setInterval(() => {
          fetch('api/get_overview')
          .then(response => response.json())
          .then(data => setData(data.data));
      }, 1000);

      return () => clearInterval(interval);
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

export default PollingServerComponent;