import ItemForm from "./ItemForm"
import InventoryDisplay from "./InventoryDisplay"
import { useState } from "react"
import { v4 as uuid } from 'uuid';
import DeleteContext from './CONTEXT/DeleteContext'

//do them in this order only after you get it functioning, skip validation till end. 
//REACT HOOK STATE FOR VALIDATION
//MATERIAL UI FOR PRETTINESS

const SpacecraftBuilder = () => {
    const [items, setItems] = useState([]);

    const addItem = (newItem) => {
        setItems(items => [...items, { ...newItem, id: uuid(), }])
    }

    const deleteItem = (id) => {
        setItems(items => items.filter(item => item.id !== id));
    }

    return (
        <>
            <h1>Spacecraft Builder</h1>
            <h2>Add an Item to the Inventory</h2>
            <ItemForm addItem={addItem} items={items} setItems={setItems} />
            <DeleteContext.Provider value={deleteItem}>
                {items.map(item => <InventoryDisplay name={item.name} quantity={item.quantity} key={item.id} id={item.id} />)}
            </DeleteContext.Provider>
        </>
    )
}

export default SpacecraftBuilder