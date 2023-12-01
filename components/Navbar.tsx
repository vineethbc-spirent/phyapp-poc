import React from 'react'
import Link from 'next/link'
 
const Navbar = () => {
  return (
    <nav className={'flex gap-4'}>
        <Link className={'p-4 flex-none w-14 h-14 rounded-lg flex items-center justify-center bg-violet-300 hover:text-red-100'} href='/client'>Client</Link>
        <Link className={'p-4 flex-none w-14 h-14 rounded-lg flex items-center justify-center bg-violet-300 hover:text-red-100'} href='/server'>Server</Link>
      </nav>
  )
}

export default Navbar