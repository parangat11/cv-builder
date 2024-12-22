export default function GeneralInfo(props) {
    return (
        <div className="info-container">
            <div className="details">General Information</div>
            <form>
                <label>First Name:</label>
                <input type="text" onChange={props.handleChange} defaultValue={props.info.firstName} name="firstName" />
                <label htmlFor="">Last Name:</label>
                <input type="text" onChange={props.handleChange} defaultValue= {props.info.lastName} name="lastName" />
                <label htmlFor="">Permanent Address:</label>
                <input type="text" name="permaAddress" onChange={props.handleChange} defaultValue={props.info.permaAddress}/>
                <label htmlFor="">Phone:</label>
                <input type="text" name="phoneNumber" onChange={props.handleChange} defaultValue={props.info.phoneNumber}/>
                <label htmlFor="">Email:</label>
                <input type="email" name="email" id="email" onChange={props.handleChange} defaultValue={props.info.email} />
            </form>
        </div>
    )
}