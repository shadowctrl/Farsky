import Main from "../components/main/main";
import {
  grid31,
  grid32,
  grid33,
  grid34,
  grid35,
  grid36,
  thefreeones,
} from "@/assets";
const gridItems = [
  { image: grid31, content: "Defend yourself" },
  { image: grid32, content: "Hack and command mechas" },
  { image: grid33, content: "Weather the storm" },
  { image: grid34, content: "Evolve your mechas' strength and skills" },
  { image: grid35, content: "Navigate with your spaceship" },
  { image: grid36, content: "Take shelter in the sky station" },
];
const paragraph = `Sky Break is an open-world game on a stormy abandoned planet filled with wild mechas. Learn to master this world and to hack the mechas if you want a chance to survive.`;
const videoSrc =
  "https://www.youtube.com/embed/f8_r3CH1Q0c?si=bL-2VLBHocqxGfPn";
const Thefreeones = () => {
  return (
    <Main
      backgroundImage={"/bg3.jpg"}
      gridItems={gridItems}
      paragraph={paragraph}
      isparaImg={false}
      videoSrc={videoSrc}
      titleImg={thefreeones}
    />
  );
};

export default Thefreeones;
