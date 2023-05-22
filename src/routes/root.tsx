import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Root;
