import Main from "./components/main/main";
import { grid1, grid2, grid3, grid4, grid5, grid6 } from "@/assets";
const gridItems = [
  { image: grid1, content: "Use the environment to gather resources" },
  { image: grid2, content: "Build an underwater base" },
  { image: grid3, content: "Craft equipment and weapons" },
  { image: grid4, content: "Protect yourself in the Ocean depths" },
  { image: grid5, content: "Manage your oxygen" },
  { image: grid6, content: "Hunt for food" },
];
const paragraph = `With FarSky, you take the role of Nathan who got lost in the Ocean
            after the crash of his submarine. You need to learn how to survive
            in the depths of the Ocean. FarSky is a short survival game in the
            depths of the Ocean. Collect all the pieces of your submarine and
            reach back the surface..`;
export default function Home() {
  return (
    <Main
      backgroundImage={"/bg1.jpg"}
      gridItems={gridItems}
      paragraph={paragraph}
    />
  );
}
