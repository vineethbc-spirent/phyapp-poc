import SocketComponent from '@/components/SocketComponent';
import React from 'react'

const ServerComponent = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <h3>Server Component</h3>
        <div>
          <SocketComponent />
        </div>
    </main>
  )
}

export default ServerComponent