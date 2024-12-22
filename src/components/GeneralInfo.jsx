export default function GeneralInfo(props) {
    return (
        <form onChange={props.handleChange}>
            <label>First Name:</label>
            <input type="text" name="firstName" />
            <label htmlFor="">Last Name:</label>
            <input type="text" name="lastName" />
            <label htmlFor="">Permanent Address:</label>
            <input type="text" name="permaAddress"/>
            <label htmlFor="">Phone:</label>
            <input type="text" name="phoneNumber" />
            <label htmlFor="">Email:</label>
            <input type="email" name="email" id="email" />
        </form>
    )
}