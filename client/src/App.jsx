import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <BrowserRouter>
        <div
          className={`${
            darkMode && "dark"
          } font-quicksand dark:bg-dark_dark dark:text-white`}
        >
          <Navbar
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
            toggleSidebar={toggleSidebar}
          />
          <Header />
          <BottomNavbar/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
