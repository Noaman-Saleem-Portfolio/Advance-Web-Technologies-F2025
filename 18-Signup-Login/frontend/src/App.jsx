import { Routes, Route, Navigate } from "react-router"
import api from "./api/axios"

/* ===== ADMIN COMPONENTS ===== */
import Dashboard from "./pages/admin/dashboard/Dashboard"
import Products from "./pages/admin/products/Products"
import Users from "./pages/admin/users/Users"
import Stats from "./pages/admin/stats/Stats"
import AddProduct from "./pages/admin/products/AddProduct"
import EditProduct from "./pages/admin/products/EditProduct"

/* ===== USER COMPONENTS ===== */
import Home from "./pages/user/home/Home"
import Signup from "./pages/auth/Signup"
import Login from "./pages/auth/Login"

/* ===== Layouts ===== */
import UserLayout from "./layout/UserLayout"


/* ===== Common Components ===== */
import LoadingSpinner from "./components/LoadingSpinner"

const App = () => {
  let authUser = false



  return (
    <div data-theme="light">
      <Routes>
        {/* ================= USER ROUTES ================= */}
        {/* A <Route> without a path is a layout route */}
        {/* <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route> */}

        {/* Layout Applies Only to a URL Segment */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* ================= ADMIN ROUTES ================= */}
        <Route path="/admin" element={authUser ? <Dashboard /> : <Navigate to={"/login"} />} >
          {/* When user visits /admin → redirect */}
          <Route index element={<Navigate to="stats" replace />} />
          <Route path="stats" element={<Stats />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="edit-product/:id" element={<EditProduct />} />
        </Route>

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </div>
  )
}

export default App
