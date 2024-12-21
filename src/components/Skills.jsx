export default function Skills() {
    return (
        <form>
            <label>School:</label>
            <input type="text" />
            <label htmlFor="">Field of Study:</label>
            <input type="text" />
            <label htmlFor="">Graduation year:</label>
            <input type="text" />
            <Augmentable text="Achievements" />
        </form>
    )
}