import Image from "next/image";
import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-parent">
      <div className="navbar-main">
        <Image src="/logo.png" width={242} height={38} />
        <div>
          <h2>
            <Link href="/">FarSky</Link>
          </h2>
          <h2>Sky Break</h2>
          <h2>The Free Ones</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
