import GeneralInfo from "./GeneralInfo.jsx"
// import Education from "./Education"
// import Skills from "./Skills"
// import Experience from "./Experience"

export default function Information(props) {
    
    return (
        <>
            <GeneralInfo handleChange={props.handleChange} />
            {/* <Education handleChange={props.handleChange} />
            <Skills handleChange={props.handleChange} />
            <Experience handleChange={props.handleChange} /> */}
        </>
    )
}