import { Routes, Route, Navigate } from "react-router"

import Dashboard from "./pages/admin/dashboard/Dashboard"
import Products from "./pages/admin/products/Products"
import Users from "./pages/admin/users/Users"
import Stats from "./pages/admin/stats/Stats"
import AddProduct from "./pages/admin/products/AddProduct"
import EditProduct from "./pages/admin/products/EditProduct"

import Home from "./pages/user/home/Home"

const App = () => {
  return (
    <div data-theme="light">
      <Routes>
        {/* user routes */}
        <Route path="/" element={<Home />} />

        {/* admin routes */}
        <Route path="/admin" element={<Dashboard />} >
          {/* When user visits /admin → redirect */}
          {/* <Route index element={<Navigate to="stats" replace />} /> */}
          <Route path="stats" element={<Stats />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="edit-product/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
