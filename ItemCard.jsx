//simple component which takes the props passed in from Inventory Display and displays them
const ItemCard = ({ name, quantity, purpose }) => {
    return (
        <>
            <h3>{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Purpose: {purpose}</p>
        </>
    )
}

export default ItemCard