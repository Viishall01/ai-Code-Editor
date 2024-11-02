import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className=' '>
        <div className='text-blue-700 items-center text-center flex justify-center font-mono font-bold p-2 border-black border-b-2 rounded-lg'>
          <Image src={'/atom-svgrepo-com.svg'} alt='icon' height={40} width={40} className=''></Image>
          <i>Croc/O/</i>code
        </div>
    </div>

  )
}

export default Header