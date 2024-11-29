import ItemForm from "./ItemForm"
import InventoryDisplay from "./InventoryDisplay"

//do them in this order only after you get it functioning, skip validation till end. 
//REACT HOOK STATE FOR VALIDATION
//MATERIAL UI FOR PRETTINESS

const SpacecraftBuilder = () => {


    return (
        <>
            <h1>Spacecraft Builder</h1>
            <h2>Add an Item to the Inventory</h2>
            <ItemForm />
            <InventoryDisplay />
        </>
    )
}

export default SpacecraftBuilder