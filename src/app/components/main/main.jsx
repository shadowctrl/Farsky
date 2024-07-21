import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/navbar";
import farsky from "@/assets/farsky.png";
import Footer from "@/app/components/footer/footer";
import paraImg from "@/assets/para.jpg";
export default function Main({
  backgroundImage,
  gridItems,
  paragraph,
  isparaImg = false,
}) {
  return (
    <div className="App">
      <div
        className="main-parent"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
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
            {paragraph}
            {isparaImg ? <Image src={paraImg} width={200} height={112} /> : ""}
          </p>
        </div>
      </div>
      <div className="main-section2">
        <div className="main-grid">
          {gridItems.map((item, index) => (
            <div className="grid-item" key={index}>
              <Image
                src={item.image}
                width={350}
                height={197}
                alt="Grid"
                className="grid-image"
              />
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
