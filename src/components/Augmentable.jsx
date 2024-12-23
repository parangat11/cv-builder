import { useState } from "react";

export default function Augmentable(props) {
    const [augmentable, setAugmentable] = useState({});
    function handleAdding() {
        props.toggleForm(!props.isOpen);
    }
    function handleFormChange(e) {
        const property = props.obj[e.target.name];
        setAugmentable({
            ...augmentable,
            [property]: e.target.value,
        })
    }
    function handleChange(e, type) {
        e.preventDefault();
        const newAugmentable = {
            ...augmentable,
            id: augmentable.id || crypto.randomUUID()
        }
        if(type==="save") {
            props.setAugmentables(() => {
                const newAugmentables = [...props.augmentables, newAugmentable];
                props.info.eduAugment = newAugmentables;
                return newAugmentables;
            });
            setAugmentable({});
            props.toggleForm(!props.isOpen);
        }
        else {
            props.toggleForm(!props.isOpen);
        }
    }
    return (
        <>
            {props.isOpen ?
            <form onChange={handleFormChange}>
                <label>School:</label>
                <input type="text" name="association" defaultValue={augmentable[props.obj.association]}/>
                <label htmlFor="">Field of Study:</label>
                <input type="text" name="work" defaultValue={augmentable[props.obj.work]} />
                <label htmlFor="">Start Date:</label>
                <input type="text" name="startDate" defaultValue={augmentable[props.obj.startDate]} />
                <label htmlFor="" >End Date</label>
                <input type="text" name="endDate" defaultValue={augmentable[props.obj.endDate]} />
                <div className="form-btns">
                    <button type="submit" onClick={(e) => handleChange(e, "save")}>Save</button>
                    <button type="generic" onClick={(e) => handleChange(e, "generic")}>Cancel</button>
                </div>
            </form>
            :
            <button onClick={handleAdding}>+ Education</button>
        }
        </>
    )
}