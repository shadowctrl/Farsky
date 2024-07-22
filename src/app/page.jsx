import "./globals.css";
import Image from "next/image";
import Navbar from "./components/navbar";
import Link from "next/link";

const Home = () => {
  return (
    <div className="home-parent">
      <Navbar />
      <div className="home">
        <div className="home-elements">
          <Link href={"/farsky"}>
            <Image
              src={"/farsky.png"}
              width={327}
              height={450}
              className="mob-image-home"
            />
          </Link>
          <Link href={"/skybreak"}>
            <Image
              src={"/skybreak.png"}
              width={327}
              height={450}
              className="mob-image-home"
            />
          </Link>
          <Link href={"/thefreeones"}>
            <Image
              src={"/thefreeones.png"}
              width={327}
              height={450}
              className="mob-image-home"
            />
          </Link>
        </div>
        <Link href={"/contact"}>
          <button>contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
