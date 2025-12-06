import React, { useState } from 'react'
import { useNavigate } from "react-router"

import api from "../../../api/axios"

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        quantity: 0,
        description: "No description available",
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
            const res = await api.post("/products", formData);
            console.log("Product created:", res.data);
            navigate("/admin/products")
        } catch (error) {
            // console.error("Error creating product:", error);
            // console.error("Error creating product:", error.message);

            console.error("Error creating product:", error?.response?.data?.message);
            setIsError(error?.response?.data?.message || "Something went wrong");
        }
    }

    const handleImgChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                // setImg(reader.result);
                setFormData(prev => ({
                    ...prev,
                    imageUrl: reader.result   // <-- update form data
                }));
            };
            reader.readAsDataURL(file);
        }
    };

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

                <label className="label">Product Description</label>
                <input name="description" type="text" className="input w-full" onChange={(e) => handleFormData(e)} />

                {/* <label className="label">Image URL</label>
                <input name="imageUrl" type="text" className="input w-full" onChange={(e) => handleFormData(e)} /> */}

                <label className="label">Pick a Image</label>
                <input type="file" accept=".jpg,.jpeg,.png" className="file-input" onChange={handleImgChange} />

                <button className="btn btn-neutral mt-4" onClick={handleSubmit}>Create Product</button>
            </fieldset>
        </div>
    )
}

export default AddProduct



// const formData = new FormData();
// formData.append("file", file);
// formData.append("upload_preset", "your_unsigned_preset");

// const upload = await axios.post(
//   "https://api.cloudinary.com/v1_1/<cloud_name>/image/upload",
//   formData
// );

// const imageUrl = upload.data.secure_url;
