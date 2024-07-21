import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import farsky from "../assets/farsky.png";
import Footer from "./components/footer/footer";
import { grid1, grid2, grid3, grid4, grid5, grid6 } from "@/assets";

const gridItems = [
  { image: grid1, content: "Use the environment to gather resources" },
  { image: grid2, content: "Build an underwater base" },
  { image: grid3, content: "Craft equipment and weapons" },
  { image: grid4, content: "Protect yourself in the Ocean depths" },
  { image: grid5, content: "Manage your oxygen" },
  { image: grid6, content: "Hunt for food" },
];
export default function Home() {
  return (
    <div className="App">
      <div className="main-parent">
        <Navbar />
        <div className="hero-main">
          <Image src={farsky} width={200} height={91} alt="farsky" />
          <Link
            href="https://store.steampowered.com/app/286340/FarSky/"
            target="_blank"
          >
            {" "}
            <button>On Steam</button>
          </Link>
          <h2 className="farsky-h2">Single Player</h2>
          <h2 className="farsky-h2">PC, Mac and Linux</h2>
          <p className="farsky-p1">
            With FarSky, you take the role of Nathan who got lost in the Ocean
            after the crash of his submarine. You need to learn how to survive
            in the depths of the Ocean. FarSky is a short survival game in the
            depths of the Ocean. Collect all the pieces of your submarine and
            reach back the surface..
          </p>
        </div>
      </div>
      <div className="main-section2">
        <div className="main-grid">
          {gridItems.map((item, index) => (
            <div className="grid-item" key={index}>
              <Image src={item.image} width={350} height={197} alt="Grid" />
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
