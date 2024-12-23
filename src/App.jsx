import { useState } from 'react'
import Information from './components/Information.jsx'
import Header from './components/Header.jsx'
import CV from './components/CV.jsx'
import './App.css'

const sampleObject = {
  firstName: '',
  lastName: '',
  permaAddress: '',
  phoneNumber: '',
  email: '',

  eduAugment: [],
  skillsAugment: [],
  
}

function App() {
  const [showCV, setShowCV] = useState(false);
  const [information, setInformation] = useState(sampleObject);
  function handleSwitch() {
    setShowCV(!showCV);
  }
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
      {showCV ? <CV info={information} handleSwitch={handleSwitch} /> : <Information handleChange={handleChange} handleSwitch={handleSwitch} info={information}/>}
    </div>
  )
}

export default App
