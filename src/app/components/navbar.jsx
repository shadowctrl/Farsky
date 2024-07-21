"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll("#nav-item-h2");
    navLinks.forEach((link) => {
      if (link.pathname === window.location.pathname)
        link.classList.add("navbar-h2-active");
    });
  }, []);
  return (
    <div className="navbar-parent">
      <div className="navbar-main">
        <Link href="/">
          {" "}
          <Image src="/logo.png" width={242} height={38} />
        </Link>
        <div>
          <h2>
            <Link href="/" id="nav-item-h2">
              FarSky
            </Link>
          </h2>
          <h2>
            <Link href="/skybreak" id="nav-item-h2">
              {" "}
              Sky Break{" "}
            </Link>
          </h2>
          <h2>
            <Link href="/thefreeones" id="nav-item-h2">
              The Free Ones
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
