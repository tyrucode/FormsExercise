import { useContext } from "react"
import DeleteContext from "./CONTEXT/DeleteContext"

const ItemAction = ({ id }) => {
    const deleteItem = useContext(DeleteContext)
    return (
        <button onClick={() => deleteItem(id)}>Delete</button>
    )
}

export default ItemAction