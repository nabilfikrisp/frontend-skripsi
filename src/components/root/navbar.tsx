import { NavLink } from "react-router-dom";
import ThemeDropdownButton from "../theme/theme-dropdown-button";
import { ENDPOINTS_URL } from "@/enums/endpoints.enum";

const ENDPOINTS = [
  {
    endpoint: ENDPOINTS_URL.YOGA,
    name: "Yoga",
  },
  {
    endpoint: ENDPOINTS_URL.GNN,
    name: "GNN",
  },
  {
    endpoint: ENDPOINTS_URL.KLASIFIKASI,
    name: "Klasifikasi",
  },
];

const Navbar = () => {
  return (
    <nav className="sticky left-0 top-0 flex min-h-[60px] items-center justify-center bg-background px-5 font-outfit shadow-sm shadow-foreground">
      <div className="flex w-full max-w-[1280px] justify-between">
        <div className="flex items-center gap-5">
          <NavLink
            to="/"
            className={({ isActive }) => [isActive ? " text-foreground underline decoration-primary" : "text-gray-500", "font-bold hover:underline"].join(" ")}
          >
            Home
          </NavLink>
          {ENDPOINTS.map((item) => (
            <NavLink
              key={`navlink-${item.name}`}
              to={item.endpoint}
              className={({ isActive }) => [isActive ? " text-foreground underline decoration-primary" : "text-gray-500", "hover:underline"].join(" ")}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center">
          <ThemeDropdownButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
