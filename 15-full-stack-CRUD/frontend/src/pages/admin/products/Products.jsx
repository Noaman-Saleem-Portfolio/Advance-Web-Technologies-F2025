import React from 'react'
import { Link } from "react-router"

const Products = () => {
    return (
        <div>
            <Link to={"/admin/add-product"} className="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                Add New Product
            </Link>

        </div>
    )
}

export default Products
