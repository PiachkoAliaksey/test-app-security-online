import { useState, Suspense } from 'react'

import './App.css'
import CardApplication from './components/CardApplication'


function App() {
  return (
    <div className='w-screen h-screen font-roboto flex items-center justify-center bg-[#F5F5F5]'>
        <CardApplication />
    </div>
  )
}

export default App
