import ItemForm from "./ItemForm"
import InventoryDisplay from "./InventoryDisplay"
import { useState } from "react"

//do them in this order only after you get it functioning, skip validation till end. 
//REACT HOOK STATE FOR VALIDATION
//MATERIAL UI FOR PRETTINESS

const SpacecraftBuilder = () => {


    return (
        <>
            <h1>Spacecraft Builder</h1>
            <h2>Add an Item to the Inventory</h2>
            //pass down item inventory state to the item form and all item form to update the state
            <ItemForm />
            //pass down function that will delete the items
            <InventoryDisplay />
        </>
    )
}

export default SpacecraftBuilder