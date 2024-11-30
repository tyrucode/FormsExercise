import { useState } from "react";

const ItemForm = ({ addItem }) => {
    //initial state of our form so we dont have to type twice
    const INITIAL_STATE = {
        name: '',
        quantity: '',
        purpose: ''
    }
    //form initial state
    const [formData, setFormData] = useState(INITIAL_STATE);
    //form onChange will update the form 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));

    }
    //on submit dont refresh, add the item, and return form to empty
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ ...formData });
        setFormData(INITIAL_STATE)
    }
    //return form, added a div for bootstrap, basic form stuff just making it so our values connect to formData and connecting the changes to
    //onChange function. Also connecting the entire form to our onSubmit function
    return (
        <div class="mb-3">

            <form onSubmit={handleSubmit} >
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Item Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="text"
                    name="quantity"
                    id="quantity"
                    placeholder="Item Quantity"
                    required
                    value={formData.quantity}
                    onChange={handleChange}
                />
                <label htmlFor="purpose">Purpose:</label>
                <input
                    type="text"
                    name="purpose"
                    id="purpose"
                    placeholder="Item Purpose"
                    required
                    value={formData.purpose}
                    onChange={handleChange}
                />
                <button>Add!</button>
            </form>
        </div>
    )
}

export default ItemForm