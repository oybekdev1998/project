import React from 'react'
import TopNavbar from './components/TopNavbar/TopNavbar'
import './App.scss'


export const App: React.FC = () => {
  return (
    <div>
      <TopNavbar />
      <h1 style={{color: 'green'}}>App</h1>
    </div>
  )
}
