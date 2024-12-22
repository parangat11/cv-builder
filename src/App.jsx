import { useState } from 'react'
import Information from './components/Information.jsx'
import Header from './components/Header.jsx';
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
    <div className="app">
      <Header />
      {showCV ? <CV information={information} handleSwitch={setShowCV} /> : <Information handleChange={handleChange} handleSwitch={setShowCV} />}
    </div>
  )
}

export default App
