import { useState } from 'react'
import Information from './components/Information.jsx'
import './App.css'

function App() {
  const [showCV, setShowCV] = useState(false);
  return (
    <>
      {showCV ? <CV /> : <Information />};
    </>
  )
}

export default App
