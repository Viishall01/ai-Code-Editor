import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TemplateCard = (item) => {
  return (
    <Link href={'/dashboard/'+item?.slug}>
    <div className='p-5 rounded-md border bg-white flex flex-col gap-3
     cursor-pointer hover:scale-105 transition-all sm:w-45 w-60 m-5 shadow-lg shadow-slate-400 '>
        <Image src={item?.icon} alt='' height={50} width={50} />
        <h2 className='font-medium'>{item.name}</h2>
        <p className='text-gray-500 line-clamp-3'>{item.desc}</p>
    </div>
    </Link>
  )
}

export default TemplateCard