import { useState } from "react";
import Navbar from "./Navbar";
import BottomNavbar from "./BottomNavbar";


const Layout = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };


  return (
    <div
      className={`${
        darkMode && "dark"
      } font-quicksand dark:bg-dark_dark dark:text-white`}
    >
      <Navbar
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      {children}
      <BottomNavbar />
    </div>
  );
};

export default Layout;

