import { Outlet } from "react-router-dom";
import Header from "./pages/home/Header";

const Root = () => {
  return (
    <>
        <Header/>
        <Outlet />
    </>
  );
};

export default Root;