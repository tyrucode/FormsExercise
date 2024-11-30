import { useState } from "react";
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'

const ItemForm = ({ addItem }) => {
    const INITIAL_STATE = {
        name: '',
        quantity: '',
        purpose: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ ...formData });
        setFormData(INITIAL_STATE)
    }

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