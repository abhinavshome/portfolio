import { Outlet } from "react-router-dom";
import Header from "./pages/home/Header";
import Footer from "./pages/home/Footer";

const Root = () => {
  return (
    <>
        <Header/>
        <Outlet />
        <Footer/>
    </>
  );
};

export default Root;