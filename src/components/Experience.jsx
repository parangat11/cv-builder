export default function Experience() {
    return (
        <form>
            <label>Company:</label>
            <input type="text" />
            <label htmlFor="">Role:</label>
            <input type="text" />
            <label htmlFor="">From:</label>
            <input type="text" />
            <label htmlFor="">To:</label>
            <input type="text" />
            <Augmentable text="Description" />
        </form>
    )
}