export default function Education(props) {
    return (
        <div className="info-container">
            <div className="details">Education</div>
            <form>
                <label>School:</label>
                <input type="text" name="school"/>
                <label htmlFor="">Field of Study:</label>
                <input type="text" name="fieldOfStudy" />
                <label htmlFor="">Graduation year:</label>
                <input type="text" name="graduationYear" />
                {/* <Augmentable text="Achievements" /> */}
            </form>
        </div>
    )
}