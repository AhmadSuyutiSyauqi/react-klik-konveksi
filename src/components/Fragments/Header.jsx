import Navbar from "./Navbar";
import NavMobile from "./NavMobile";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

const Header = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {variant} = props;

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        id="main-header"
        className={`h-14 items-center justify-between p-2 pr-0 z-50 fixed w-full hidden md:flex ${variant} text-orange-300 ${
          isScrolled
            ? "bg-gray-500 bg-opacity-50 backdrop-blur-md shadow-sm"
            : ""
        }`}
      >
        <div className="flex items-center w-full h-10 md:w-52">
          <a href="/">
            <img src={Logo} alt="Logo" className="w-16" />
          </a>
          <p className="-ml-3 text-xs font-semibold text-gradient text-orange-300">
            Klik Konveksi
          </p>
        </div>

        <Navbar></Navbar>
      </header>

      <NavMobile></NavMobile>
    </>
  );
};

export default Header;
