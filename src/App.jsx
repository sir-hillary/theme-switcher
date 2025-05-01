import React from 'react'
import { ThemeProvider } from './Context/ThemeContext'
import Header from './Components/Header'
import Content from './Components/Content'

const App = () => {
  return (
    <ThemeProvider>
      <div className='bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100'>
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  )
}

export default App