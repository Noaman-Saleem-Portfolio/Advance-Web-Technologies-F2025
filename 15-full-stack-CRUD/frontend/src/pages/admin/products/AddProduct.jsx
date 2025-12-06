import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router"

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        quantity: "",
        imageUrl: ""
    })
    const [isError, setIsError] = useState(false)

    const navigate = useNavigate()

    const handleFormData = (e) => {
        setFormData((pre) => {
            return {
                ...pre,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async () => {
        try {
            console.log(formData);
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/products`, formData);
            console.log("Product created:", res.data);
            navigate("/admin/products")
        } catch (error) {
            // console.error("Error creating product:", error);
            // console.error("Error creating product:", error.message);
            console.error("Error creating product:", error.response.data.message);
            setIsError(error.response.data.message)
        }
    }

    return (
        <div className="flex justify-center">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  w-full max-w-xl border p-4">
                <legend className="fieldset-legend">Create New Product</legend>

                {isError && <p className="text-red-500">{isError}</p>}

                <label className="label">Product Name</label>
                <input name="name" type="text" className="input w-full" onChange={(e) => handleFormData(e)} />

                <label className="label">Product Price</label>
                <input name="price" type="number" className="input w-full" onChange={(e) => handleFormData(e)} />

                <label className="label">Product Quantity</label>
                <input name="quantity" type="number" className="input w-full" onChange={(e) => handleFormData(e)} />

                <label className="label">Image URL</label>
                <input name="imageUrl" type="text" className="input w-full" onChange={(e) => handleFormData(e)} />



                <button className="btn btn-neutral mt-4" onClick={handleSubmit}>Create Product</button>
            </fieldset>
        </div>
    )
}

export default AddProduct
