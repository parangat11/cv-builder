import { useState } from "react"
import Augmentable from "./Augmentable";
import ShowInfo from "./ShowInfo";

export default function Experience(props) {
    const augmentables = props.info.expAugment;
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
        props.changeAug("expAugment", newAugmentables);
    }
    function handleDelete(id) {
        const newAugmentables = [];
        for(let i = 0; i < augmentables.length; i++) {
            if(augmentables[i].id !== id) {
                newAugmentables.push(augmentables[i]);
            }
        }
        props.changeAug("expAugment", newAugmentables);
    }
    const obj = {
        association: "Company",
        work: "Position",
        description: "Description",
        startDate: "Start Date",
        endDate: "End Date",
    }
    return (
        <div className="info-container">
            <div className="details">Experience</div>
            <div className="add">
                {augmentables.map(augmentable => 
                    <ShowInfo handleDelete={handleDelete} handleEdit={handleEdit} key={augmentable.id} augmentable={augmentable} obj={obj} />
                )}
                <Augmentable augType="expAugment" changeAug={props.changeAug} obj={obj} toEdit={toEdit} setToEdit={setToEdit} info={props.info} association="company" work="position" hasDescription={true} augmentables={augmentables} isOpen={isAddingInfo} toggleForm={setIsAddingInfo}/>
            </div>
            
        </div>
    )
}