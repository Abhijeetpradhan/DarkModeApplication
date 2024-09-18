import { useEffect, useState } from "react";
import "./App.css";
import BackgroundChanger from "./Components/BackgroundChanger";
import PasswordGenerator from "./Components/PasswordGenerator";
import Navbar from "./Components/NavbarWithDarkLightMode/Navbar";
import Footer from "./Components/FooterComponent/Footer";
import Home from "./Components/Home/Home";
import { Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
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
import { lazy, Suspense } from "react";

const LazyHomePage = lazy(() => new Promise((resolve)=>{
  setTimeout(()=>resolve(import("./Components/Home/Home")),4000)
}));
const LazyAboutPage = lazy(()=>new Promise((resolve)=>{
  setTimeout(()=>resolve(import("./Components/About/About")),5000)
}));

// const LazyHomePage = lazy(()=>import("./Components/Home/Home"));
// const LazyAboutPage = lazy(()=>import("./Components/About/About"));

function LoadingSpinner() {
  return <div className="spinner">Loading...</div>;
}

function App() {
  const currentTheme = localStorage.getItem("currentTheme");
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme]);

  return (
    <>
      <div className={`Container ${theme}`}>
        <div className="content-wrap">
          {/* <BackgroundChanger/> */}
          {/* <PasswordGenerator/> */}
          <Navbar theme={theme} setTheme={setTheme} />

          {/* <Outlet/> */}
          <Suspense fallback={<LoadingSpinner/>}>
          <Routes>
            <Route path="/" element={<LazyHomePage />} />
            <Route path="about" element={<LazyAboutPage />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="order-summary" element={<OrderSummary />} />

            <Route path="products" element={<Products />}>
              {/* index route */}
              <Route index element={<FeaturedProducts />} />
              <Route path="featured" element={<FeaturedProducts />} />
              <Route path="new" element={<Newproducts />} />
            </Route>

            <Route path="users" element={<Users />}></Route>
            <Route path="users/:userId" element={<UserDetailedInfo />} />
            <Route path="admin" element={<Admin />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
