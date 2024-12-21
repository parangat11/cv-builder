import GeneralInfo from "./GeneralInfo.jsx"
// import Education from "./Education"
// import Skills from "./Skills"
// import Experience from "./Experience"

export default function Information() {
    function handleGenChange(e) {
        console.log(e.target.value)
    }
    return (
        <>
            <GeneralInfo handleGenChange={handleGenChange}/>
            {/* <Education />
            <Skills />
            <Experience /> */}
        </>
    )
}