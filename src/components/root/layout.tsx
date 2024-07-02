import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import { Toaster } from "../ui/toaster";

const Layout = () => {
  return (
    <div className="flex h-full min-h-screen w-screen flex-col overflow-auto">
      <Navbar />
      <div className="flex h-full flex-grow">
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
};

export default Layout;
