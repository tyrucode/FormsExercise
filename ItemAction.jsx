import { useContext } from "react"
import DeleteContext from "./CONTEXT/DeleteContext"

const ItemAction = ({ id }) => {
    //using context for the delete function which i messed up bc i shouldve just used context on everything except just this function lols
    const deleteItem = useContext(DeleteContext)
    return (
        //delete function based on if its id is the same as the one clicked
        <button onClick={() => deleteItem(id)}>Delete</button>
    )
}

export default ItemAction