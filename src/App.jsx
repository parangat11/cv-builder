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
  console.log(information);
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
  function changeAugmentables(type, newAugmentables) {
    setInformation({
      ...information,
      [type]: newAugmentables,
    })
  }
  return (
    <div className="app">
      <Header />
      {showCV ? <CV info={information} handleSwitch={handleSwitch} /> : <Information changeAug={changeAugmentables} handleChange={handleChange} handleSwitch={handleSwitch} setInfo={setInformation} info={information}/>}
    </div>
  )
}

export default App
