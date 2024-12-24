import "../styles/showinfo.css"
import editIcon from "/src/assets/pencil-icon.svg"
import deleteIcon from "/src/assets/recycle-bin-icon.svg"

export default function ShowInfo({ augmentable, obj, handleDelete, handleEdit }) {
    return (
        <>
            <div className="placard">
                <div className="association">{augmentable[obj.association]}</div>
                <div className="img-container">
                    <img src={editIcon} className="edit" onClick={() => handleEdit(augmentable.id)} />
                    <img src={deleteIcon} className="delete" onClick={() => handleDelete(augmentable.id)} />
                </div>
            </div>
        </>
    )
}