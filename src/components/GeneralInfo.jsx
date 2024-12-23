export default function GeneralInfo(props) {
    return (
        <div className="info-container">
            <div className="details">General Information</div>
            <form onChange={props.handleChange}>
                <label>First Name:</label>
                <input type="text" defaultValue={props.info.firstName} name="firstName" />
                <label htmlFor="">Last Name:</label>
                <input type="text" defaultValue= {props.info.lastName} name="lastName" />
                <label htmlFor="">Address:</label>
                <input type="text" name="permaAddress" defaultValue={props.info.permaAddress}/>
                <label htmlFor="">Phone:</label>
                <input type="text" name="phoneNumber" defaultValue={props.info.phoneNumber}/>
                <label htmlFor="">Email:</label>
                <input type="email" name="email" id="email" defaultValue={props.info.email} />
            </form>
        </div>
    )
}