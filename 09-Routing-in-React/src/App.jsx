import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Products from "./pages/Products";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Menubar from "./components/Menubar";

import "./index.css";
import "./styles/menubar.css";
import "./styles/products.css";

function App() {
  return (
    <>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />

        {/* Dynamic routes */}
        <Route path="/courses/:courseId" element={<CourseDetail />} />

        {/* Nested Routes */}
        <Route path="/products" element={<Products />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
