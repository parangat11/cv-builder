import { useState, useEffect } from "react";

export default function Augmentable(props) {
    const [augmentable, setAugmentable] = useState({});
    useEffect(() => {
        if(props.toEdit) {
            setAugmentable(() => props.toEdit);
            props.toggleForm(true);
        }
        else {
            setAugmentable({});
        }
    }, [props.toEdit])
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
            const newAugmentables = [...props.augmentables, newAugmentable];
            props.changeAug(props.augType, newAugmentables)
            props.setToEdit(null);
            setAugmentable({});
            props.toggleForm(!props.isOpen);
        }
        else {
            if(props.toEdit) {
                const newAugmentables = [...props.augmentables, augmentable];
                props.changeAug(props.augType, newAugmentables)
                props.setToEdit(null);
                setAugmentable({});
            }
            props.toggleForm(!props.isOpen);
        }
    }
    return (
        <>
            {props.isOpen ?
            <form>
                <label>{props.obj.association}:</label>
                <input type="text" onChange={handleFormChange} name="association" value={augmentable[props.obj.association] || ''}/>
                <label htmlFor="">{props.obj.work}:</label>
                <input type="text" onChange={handleFormChange} name="work" value={augmentable[props.obj.work] || ''} />
                <label htmlFor="">Start Date:</label>
                <input type="text" onChange={handleFormChange} name="startDate" value={augmentable[props.obj.startDate] || ''} />
                <label htmlFor="" >End Date</label>
                <input type="text" onChange={handleFormChange} name="endDate" value={augmentable[props.obj.endDate] || ''} />
                {
                    props.hasDescription && 
                    <>
                        <label htmlFor="">Description</label>
                        <textarea onChange={handleFormChange} value={augmentable[props.obj.description] || ''} name="description" id=""></textarea>
                    </>
                }
                <div className="form-btns">
                    <button type="submit" onClick={(e) => handleChange(e, "save")}>Save</button>
                    <button type="generic" onClick={(e) => handleChange(e, "generic")}>Cancel</button>
                </div>
            </form>
            :
            <button onClick={handleAdding}>+ Add</button>
        }
        </>
    )
}