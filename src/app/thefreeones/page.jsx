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
const Thefreeones = () => {
  return <Main backgroundImage={"/bg2.jpg"} gridItems={gridItems} />;
};

export default Thefreeones;
