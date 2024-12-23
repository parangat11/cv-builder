import "../styles/showinfo.css"

export default function ShowInfo({ augmentable, obj, handleDelete, handleEdit }) {
    return (
        <>
            <div className="placard">
                <div className="association">{augmentable[obj.association]}</div>
                <div>
                    <button className="edit" onClick={() => handleEdit(augmentable.id)}>Edit</button>
                    <button className="delete" onClick={() => handleDelete(augmentable.id)}>Delete</button>
                </div>
            </div>
        </>
    )
}