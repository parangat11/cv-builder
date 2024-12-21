export default function GeneralInfo({ handleGenChange }) {
    return (
        <form onChange={handleGenChange}>
            <label>First Name:</label>
            <input type="text" />
            <label htmlFor="">Last Name:</label>
            <input type="text" />
            <label htmlFor="">Permanent Address:</label>
            <input type="text" />
            <label htmlFor="">Phone:</label>
            <input type="text" />
            <label htmlFor="">Email:</label>
            <input type="email" name="email" id="email" />
        </form>
    )
}