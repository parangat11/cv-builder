import "../styles/showinfo.css"

export default function ShowInfo({ augmentable, obj, handleDelete, handleEdit }) {
    return (
        <>
            <div className="placard">
                <div className="association">{augmentable[obj.association]}</div>
                <div className="img-container">
                    <img src="/src/assets/pencil-icon.svg" className="edit" onClick={() => handleEdit(augmentable.id)} />
                    <img src="/src/assets/recycle-bin-icon.svg" className="delete" onClick={() => handleDelete(augmentable.id)} />
                </div>
            </div>
        </>
    )
}