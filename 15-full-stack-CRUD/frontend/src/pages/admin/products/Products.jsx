import React, { useEffect, useState } from 'react'
import { Link } from "react-router"

import api from "../../../api/axios.js"

const Products = () => {
    const [allProducts, setAllProducts] = useState([])
    const [page, setpage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [totalProducts, setTotalProducts] = useState(1)

    const getData = async () => {
        try {
            const res = await api.get(`/products?page=${page}`)
            // console.log(res);

            setTotalPages(res.data.totalPages)
            setTotalProducts(res.data.totalProducts)
            setAllProducts(res.data.products)
        } catch (error) {
            console.log(`Error = ${error}`);
        }
    }

    useEffect(() => {
        getData()
    }, [page])

    return (
        <div >
            <div className="flex justify-between">
                <p className="bg-base-300 px-[15px] py-[10px]">Total Products : {totalProducts}</p>
                <Link to={"/admin/add-product"} className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                    Add New Product
                </Link>

            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quanity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProducts.map((item, index) => {
                            return <tr key={index}>
                                {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                {item.imageUrl ? <img
                                                    src={item.imageUrl}
                                                    alt="Avatar Tailwind CSS Component" /> : <img
                                                    src="/placeholder-image.webp"
                                                    alt="Product image" />}

                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                            {/* <div className="text-sm opacity-50">United States</div> */}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <td>{item.quantity}</td>
                                <th>
                                    <Link to={`/admin/edit-product/${item._id}`} className="btn btn-ghost btn-xs">details</Link>
                                </th>
                            </tr>
                        })}


                    </tbody>
                    {/* foot */}
                    {/* <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </tfoot> */}
                </table>
            </div>

            {totalPages > 1 && <div className="join flex justify-center">
                <button
                    disabled={page === 1}
                    className={`join-item btn ${page === 1 ? "bg-gray-300  text-gray-600" : ""}`}
                    onClick={() => setpage(page > 1 ? page - 1 : page)}>«</button>

                <button className="join-item btn">Page {page} of {totalPages}</button>

                <button
                    disabled={page === totalPages}
                    className={`join-item btn ${page === totalPages ? "bg-gray-300  text-gray-600" : ""}`}
                    onClick={() => setpage(page < totalPages ? page + 1 : page)}>»</button>
            </div>}
        </div>
    )
}

export default Products
