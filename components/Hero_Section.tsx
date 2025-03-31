"use client"
import React from 'react'
import Navbar from './Navbar'
import Content_area from './Content_area'
import Options_email from './Options_email'
import Sendopt from './Sendopt'

export default function Hero_Section() {
    return (
       <div className='flex flex-col h-screen'>
         <Navbar />
         <Options_email />
         <Content_area />
         <Sendopt />
       </div>
  )
}
