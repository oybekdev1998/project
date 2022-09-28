import React from 'react'
import TopNavbar from './components/TopNavbar/TopNavbar'
import Header from './components/Header'

import './App.scss'



export const App: React.FC = () => {
  return (
    <div>
      <TopNavbar />
      <Header />
    </div>
  )
}
