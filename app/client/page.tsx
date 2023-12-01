'use client';
import React, {useState} from 'react'

const ClientComponent = () => {
  const [value, setValue] = useState(false);
  console.log(value)
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <h3>Client Component</h3>
        <button className={'rounded-md bg-sky-500 px-1.5'} onClick={() => setValue(value => !value)}>{String(value)}</button>
    </main>
  )
}

export default ClientComponent