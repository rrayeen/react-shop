import { FaLaptop, FaTabletAlt } from "react-icons/fa";
import { FiMonitor, FiSmartphone } from "react-icons/fi";
import { GiConsoleController } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const linkStyle = "flex items-center hover:underline   justify-start gap-2";

function MainNav() {
  return (
    <nav>
      <ul className="flex   flex-col gap-4 px-4">
        <li>
          <NavLink className={linkStyle} to="/categorie/phones">
            <FiSmartphone />

            <span>Phones</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={linkStyle} to="/categorie/laptops">
            <FaLaptop />

            <span>Laptops</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={linkStyle} to="/categorie/monitors">
            <FiMonitor />

            <span>Monitors</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={linkStyle} to="/categorie/tablets">
            <FaTabletAlt />

            <span>Tablets</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={linkStyle} to="/categorie/console">
            <GiConsoleController />

            <span>Console</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
