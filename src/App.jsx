import { useState } from 'react'
import Information from './components/Information.jsx'
import './App.css'

function App() {
  const [showCV, setShowCV] = useState(false);
  const [information, setInformation] = useState({});
  function handleChange(e) {
    setInformation(
      {
        ...information,
        [e.target.name]: e.target.value,
      }
    )
  }
  return (
    <>
      {showCV ? <CV information={information} /> : <Information handleChange={handleChange} />}
      <button onClick={() => setShowCV(!showCV)}>
        {showCV ? <>Edit</> : <>Generate</>}
      </button>
    </>
  )
}

export default App
