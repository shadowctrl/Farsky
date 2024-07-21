import Main from "../components/main/main";
import { grid21, grid22, grid23, grid24, grid25, grid26 } from "@/assets";
const gridItems = [
  { image: grid21, content: "A unique grapple system" },
  { image: grid22, content: "A story with a twist" },
  { image: grid23, content: "A man-made island" },
  { image: grid24, content: "" },
  { image: grid25, content: "" },
  { image: grid26, content: "" },
];
const paragraph = `Follow Theo's dizzying adventure in first-person platformer "The Free Ones". Soar through the air with your grapple, blaze a trail through the canyons and take part in an extraordinary story.`;
const Thefreeones = () => {
  return (
    <Main
      backgroundImage={"/bg2.jpg"}
      gridItems={gridItems}
      paragraph={paragraph}
      isparaImg={true}
    />
  );
};

export default Thefreeones;
