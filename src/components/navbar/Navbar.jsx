import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import "./navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navbarRef = useRef(null);
  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const navbar = navbarRef.current;

      if (scrollTop > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={navbarRef} className="navbar_container">
      <div className="navbar_container-brand">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <h2>TERRITORIO COVA</h2>
      </div>
      <div className="navbar_container-links">
        <div className="nav-links">
        <a href="#inicio">INICIO</a>
          <a href="#servicios">SERVICIOS</a>
          <a href="#nosotros">NOSOTROS</a>
          <a href="">CONTACTO</a>
        </div>
      </div>
      <div className="navbar_container-links-toggle">
        {toggle ? (
          <AiOutlineMenuUnfold
            className="bsmenudown"
            size={45}
            color="var(--color-main)"
            onClick={() => setToggle(false)}
          />
        ) : (
          <AiOutlineMenuFold
            className="bsmenudown"
            size={45}
            color="var(--color-main)"
            onClick={() => setToggle(true)}
          />
        )}
        {toggle && (
          <div className="nav_toggle-container-links">
            <div className="toggle-links">
            <a onClick={()=>setToggle(false)} href="#inicio">INICIO</a>
              <a onClick={()=>setToggle(false)} href="#servicios">SERVICIOS</a>
              <a onClick={()=>setToggle(false)} href="#nosotros">NOSOTROS</a>
              <a onClick={()=>setToggle(false)} href="">CONTACTO</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
