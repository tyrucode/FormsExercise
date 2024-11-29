import ItemCard from "./ItemCard"
import ItemAction from "./ItemAction"

//eventually we also put the deleting item function here as prop and pass it down to item action
//we do this after creating it first in spacecraft builder
const InventoryDisplay = ({ name, quantity, purpose }) => {

    return (
        <>
            <h3>INVENTORY:</h3>
            <ItemCard name={name} quantity={quantity} purpose={purpose} />
            <ItemAction />
        </>
    )
}

export default InventoryDisplay