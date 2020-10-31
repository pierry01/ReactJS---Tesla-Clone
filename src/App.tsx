import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import Page from './components/Page'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Page />
      
      <GlobalStyles />
    </div>
  )
}

export default App
