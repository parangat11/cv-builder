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
                {props.info.eduAugment.length > 0 && (<div className="education sub">
                    <div className="section">Education</div>
                        {props.info.eduAugment.map(augment =>
                            <div className="augments">
                                <div className="school">{augment["School"]}</div>
                                <div className="field-of-study">{augment["Field of Study"]}</div>
                                <div className="duration">{augment["Start Date"]} to {augment["End Date"]}</div>
                            </div>
                        )}
                </div>)}
                {props.info.skillsAugment.length > 0 && (<div className="skills sub">
                    <div className="section">Skills</div>
                    <div className="augments">
                    {props.info.skillsAugment.length > 0 &&
                        <ul>
                        {props.info.skillsAugment.map(augment =>
                            <li key={augment["id"]}>
                                <div className="skill-type">{augment["Skill Type"]}</div>
                                <div className="skill">{augment["Skill"]}</div>
                                <div className="description">{augment["Description"]}</div>
                            </li>
                        )}
                        </ul> 
                    }
                    </div>
                </div>)}
                {props.info.expAugment.length > 0 && (<div className="experience sub">
                    <div className="section">Experience</div>
                    <div className="augments">
                    {props.info.expAugment.length > 0 &&
                        <ul>
                        {props.info.expAugment.map(augment =>
                            <li key={augment["id"]}>
                                <div className="company">{augment["Company"]}</div>
                                <div className="position">{augment["Position"]}</div>
                                <div className="description">{augment["Description"]}</div>
                            </li>
                        )}
                        </ul>
                    }
                    </div>
                </div>)}
            </div>
            <button id="cv-btn" onClick={props.handleSwitch}>
                Edit
            </button>
        </div>
    )
}