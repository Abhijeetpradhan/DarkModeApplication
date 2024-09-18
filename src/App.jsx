// import { useEffect, useState } from "react";
// import "./App.css";
// import BackgroundChanger from "./Components/BackgroundChanger";
// import PasswordGenerator from "./Components/PasswordGenerator";
// import Navbar from "./Components/NavbarWithDarkLightMode/Navbar";
// import Footer from "./Components/FooterComponent/Footer";
// import Home from "./Components/Home/Home";
// import { Outlet } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
// import About from "./Components/About/About";
// import Services from "./Components/ServicePage/Services";
// import Contact from "./Components/Contact/Contact";
// import OrderSummary from "./Components/OrderSummary/OrderSummary";
// import ErrorPage from "./Components/Errorpage/ErrorPage";
// import Products from "./Components/ProductRelatedPages/Products";
// import FeaturedProducts from "./Components/ProductRelatedPages/FeaturedProducts";
// import Newproducts from "./Components/ProductRelatedPages/Newproducts";
// import Users from "./Components/UserRelatedDetails/Users";
// import UserDetailedInfo from "./Components/UserRelatedDetails/UserDetailedInfo";
// import Admin from "./Components/Admin/Admin";
// import { lazy } from "react";
// import { Suspense } from "react";

// const LazyHomePage = lazy(() => import("./Components/Home/Home"));
// const LazyAboutPage = lazy(() => import("./Components/About/About"));

// function App() {
//   const currentTheme = localStorage.getItem("currentTheme");
//   const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

//   useEffect(() => {
//     localStorage.setItem("currentTheme", theme);
//   }, [theme]);

//   return (
//     <>
//       <div className={`Container ${theme}`}>
//         <div className="content-wrap">
//           {/* <BackgroundChanger/> */}
//           {/* <PasswordGenerator/> */}
//           <Navbar theme={theme} setTheme={setTheme} />

//           {/* <Outlet/> */}

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="about"
//               element={
//                 <Suspense fallback={<>Loading..........</>}>
//                   <LazyAboutPage />
//                 </Suspense>
//               }

//               // element={<About/>}
//             />
//             <Route path="services" element={<Services />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="order-summary" element={<OrderSummary />} />

//             <Route path="products" element={<Products />}>
//               {/* index route */}
//               <Route index element={<FeaturedProducts />} />
//               <Route path="featured" element={<FeaturedProducts />} />
//               <Route path="new" element={<Newproducts />} />
//             </Route>

//             <Route path="users" element={<Users />}></Route>
//             <Route path="users/:userId" element={<UserDetailedInfo />} />
//             <Route path="admin" element={<Admin />} />

//             <Route path="*" element={<ErrorPage />} />
//           </Routes>
//           {/* </Suspense> */}
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;


import React, { useEffect, useState, Suspense } from "react";
import "./App.css";
import Navbar from "./Components/NavbarWithDarkLightMode/Navbar";
import Footer from "./Components/FooterComponent/Footer";
import { Routes, Route } from "react-router-dom";
import Services from "./Components/ServicePage/Services";
import Contact from "./Components/Contact/Contact";
import OrderSummary from "./Components/OrderSummary/OrderSummary";
import ErrorPage from "./Components/Errorpage/ErrorPage";
import Products from "./Components/ProductRelatedPages/Products";
import FeaturedProducts from "./Components/ProductRelatedPages/FeaturedProducts";
import Newproducts from "./Components/ProductRelatedPages/Newproducts";
import Users from "./Components/UserRelatedDetails/Users";
import UserDetailedInfo from "./Components/UserRelatedDetails/UserDetailedInfo";
import Admin from "./Components/Admin/Admin";

// Lazy load the Home and About components
const LazyHomePage = React.lazy(() => import("./Components/Home/Home"));
const LazyAboutPage = React.lazy(() => import("./Components/About/About"));

function App() {
  // Manage theme state with localStorage
  const currentTheme = localStorage.getItem("currentTheme");
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  // Store the theme in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme]);

  return (
    <div className={`Container ${theme}`}>
      {/* Navbar component with theme toggle */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Suspense component to handle loading for lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Lazy-loaded Home page */}
          <Route path="/" element={<LazyHomePage />} />

          {/* Lazy-loaded About page */}
          <Route path="about" element={<LazyAboutPage />} />

          {/* Other non-lazy loaded routes */}
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="order-summary" element={<OrderSummary />} />

          {/* Nested routes for Products */}
          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<Newproducts />} />
          </Route>

          {/* User and Admin routes */}
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<UserDetailedInfo />} />
          <Route path="admin" element={<Admin />} />

          {/* Fallback route for unknown paths */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
