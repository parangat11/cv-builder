import "../styles/information.css"
import { useState } from "react"
import GeneralInfo from "./GeneralInfo.jsx"
import Education from "./Education"
import Skills from "./Skills"
import Experience from "./Experience"

export default function Information(props) {
    const [selectedIdx, setSelectedIdx] = useState(0);
    return (
        <div className="information">
            <div className="selection">
                <div onClick={() => setSelectedIdx(0)}>General Information</div>
                <div onClick={() => setSelectedIdx(1)}>Educational Information</div>
                <div onClick={() => setSelectedIdx(2)}>Skills</div>
                <div onClick={() => setSelectedIdx(3)}>Experience</div>
            </div>
            <div className="selected">
                {selectedIdx === 0 && <GeneralInfo handleChange={props.handleChange} setInfo={props.setInfo} info={props.info}/>}
                {selectedIdx === 1 && <Education changeAug={props.changeAug} info={props.info} setInfo={props.setInfo} handleChange={props.handleChange} />}
                {selectedIdx === 2 && <Skills changeAug={props.changeAug} info={props.info} setInfo={props.setInfo} handleChange={props.handleChange} />}
                {selectedIdx === 3 && <Experience changeAug={props.changeAug} info={props.info} setInfo={props.setInfo} handleChange={props.handleChange} />}
            </div>
            <button onClick={props.handleSwitch}>
                Generate
            </button>
        </div>
    )
}