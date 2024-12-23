import { useState } from "react"
import Augmentable from "./Augmentable";
import ShowInfo from "./ShowInfo";

export default function Skills(props) {
    const augmentables = props.info.skillsAugment;
    const [isAddingInfo, setIsAddingInfo] = useState(false);
    const [toEdit, setToEdit] = useState(null);
    function handleEdit(id) {
        const newAugmentables = [];
        for(let i = 0; i < augmentables.length; i++) {
            if(augmentables[i].id === id) {
                setToEdit(augmentables[i]);
                continue;
            }
            newAugmentables.push(augmentables[i]);
        }
        props.changeAug("skillsAugment", newAugmentables);
    }
    function handleDelete(id) {
        const newAugmentables = [];
        for(let i = 0; i < augmentables.length; i++) {
            if(augmentables[i].id !== id) {
                newAugmentables.push(augmentables[i]);
            }
        }
        props.changeAug("skillsAugment", newAugmentables);
    }
    const obj = {
        association: "Skill Type",
        work: "Skill",
        description: "Description",
        startDate: "Start Date",
        endDate: "End Date",
    }
    return (
        <div className="info-container">
            <div className="details">Skills</div>
            <div className="add">
                {augmentables.map(augmentable => 
                    <ShowInfo handleDelete={handleDelete} handleEdit={handleEdit} key={augmentable.id} augmentable={augmentable} obj={obj} />
                )}
                <Augmentable augType="skillsAugment" changeAug={props.changeAug} obj={obj} toEdit={toEdit} setToEdit={setToEdit} info={props.info} association="school" work="fieldOfStudy" hasDescription={true} augmentables={augmentables} isOpen={isAddingInfo} toggleForm={setIsAddingInfo}/>
            </div>
            
        </div>
    )
}