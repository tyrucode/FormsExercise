import ItemCard from "./ItemCard"
import ItemAction from "./ItemAction"

const InventoryDisplay = ({ name, quantity, purpose, id }) => {

    return (
        <div>
            <h3>INVENTORY:</h3>
            <ItemCard name={name} quantity={quantity} purpose={purpose} id={id} />
            <ItemAction id={id} />
        </div>
    )
}

export default InventoryDisplay