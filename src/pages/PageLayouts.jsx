import Navbar  from '@/components/Navbar'
import React from 'react'
import Footer from '@/components/Footer'

export default function PageLayouts ({ children })  {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer />
    </div>
  )
}
 //default pageLayouts;