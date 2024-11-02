import React from 'react'
import Header from './_components/Header'

const layout = ({children}) => {
  return (
    <div className=''>
        <Header/>
        {children}
    </div>
  )
}

export default layout