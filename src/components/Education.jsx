import { useState } from "react"
import Augmentable from "./Augmentable";
import ShowInfo from "./ShowInfo";

export default function Education(props) {
    const [augmentables, setAugmentables] = useState([]);
    const [isAddingInfo, setIsAddingInfo] = useState(false);
    function handleEdit(id) {
        ;
    }
    function handleDelete(id) {
        const newAugmentables = [];
        for(let i = 0; i < augmentables.length; i++) {
            if(augmentables[i].id !== id) {
                newAugmentables.push(augmentables[i]);
            }
        }
        setAugmentables(() => {
            props.info.eduAugment = newAugmentables;
            console.log(props.info)
            return newAugmentables;
        });
    }
    const obj = {
        association: "School",
        work: "Field of Study",
        startDate: "Start Date",
        endDate: "End Date",
    }
    return (
        <div className="info-container">
            <div className="details">Educational Information</div>
            <div className="add">
                {augmentables.map(augmentable => 
                    <ShowInfo handleDelete={handleDelete} handleEdit={handleEdit} key={augmentable.id} augmentable={augmentable} obj={obj} />
                )}
                <Augmentable obj={obj} info={props.info} association="school" work="fieldOfStudy" hasDescription={false} setAugmentables={setAugmentables} augmentables={augmentables} isOpen={isAddingInfo} toggleForm={setIsAddingInfo}/>
            </div>
            
        </div>
    )
}