import { Fragment } from "react";
import "../styles/cv.css"

export default function CV(props) {
    const firstName = props.info.firstName, lastName = props.info.lastName;
    const name = firstName + " " + lastName;
    const mail = props.info.email;
    const phone = props.info.phoneNumber;
    const address = props.info.permaAddress;
    console.log(props.info);
    return (
        <div className="cv-container">
            <div className="cv">
                <div className="general-info">
                    <div className="person-name">{name}</div>
                    <div className="contact">
                        <div className="mail"><img className="icons" src="/src/assets/envelope-icon.svg" alt="" /> {mail}</div>
                        <div>|</div>
                        <div className="phone-number"><img className="icons" src="/src/assets/phone-icon.svg" alt="" /> {phone}</div>
                        <div>|</div>
                        <div className="address"><img className="icons" src="/src/assets/address.svg" alt="" /> {address}</div>
                    </div>
                </div>
                <div className="education">
                    {props.info.eduAugment.map(augment =>
                        <Fragment key={augment["id"]}>
                            <h1>{augment["School"]}</h1>
                        </Fragment>
                    )}
                </div>
            </div>
            <button id="cv-btn" onClick={props.handleSwitch}>
                Edit
            </button>
        </div>
    )
}