import { Routes, Route, Navigate } from "react-router"

import Dashboard from './pages/admin/Dashboard/Dashboard'
import Products from "./pages/admin/Products/Products"
import Stats from "./pages/admin/Stats/Stats"
import Users from "./pages/admin/Users/Users"
import Inbox from "./pages/admin/Inbox/Inbox"

const App = () => {
  return (
    <div data-theme="night">
      <Routes>
        <Route path="/admin" element={<Dashboard />}>
          {/* When user visits /admin → redirect */}
          <Route index element={<Navigate to="stats" replace />} />
          <Route path="stats" element={<Stats />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="inbox" element={<Inbox />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
