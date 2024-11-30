const ItemCard = ({ name, quantity, purpose }) => {
    return (
        <>
            {/* simple item card */}
            <h3>{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Purpose: {purpose}</p>
        </>
    )
}

export default ItemCard