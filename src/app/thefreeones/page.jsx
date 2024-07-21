import Main from "../components/main/main";
import {
  grid21,
  grid22,
  grid23,
  grid24,
  grid25,
  grid26,
  thefreeones,
} from "@/assets";
const gridItems = [
  { image: grid21, content: "A unique grapple system" },
  { image: grid22, content: "A story with a twist" },
  { image: grid23, content: "A man-made island" },
  { image: grid24, content: "" },
  { image: grid25, content: "" },
  { image: grid26, content: "" },
];
const paragraph = `Follow Theo's dizzying adventure in first-person platformer "The Free Ones". Soar through the air with your grapple, blaze a trail through the canyons and take part in an extraordinary story.`;
//const videoSrc =
//  "https://rr3---sn-npoe7nsr.googlevideo.com/videoplayback?expire=1721583347&ei=kvKcZp_5PP6SsfIP3r7nsAw&ip=185.187.168.10&id=o-AFD9HlEzz0UToTB5hooFNZLCJH63cfzeT5zsEN3xszmZ&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AXc671LpGv2PONkVLqFzjia2V4T4AzyBWg3FL1_AJ6OnnoHIxNjFuhllQTlBa1k-jxWRRFSvMfVGrg29&spc=NO7bAfCKI_Utd6AONDz3YnEbZl47zz5HftOnJViX8zY7RUn41Du-NhdvtNysftw&vprv=1&svpuc=1&mime=video%2Fmp4&ns=c5JbNM04bUfI5ka3xfQEuCYQ&rqh=1&cnr=14&ratebypass=yes&dur=75.929&lmt=1665423563906831&c=WEB&sefc=1&txp=1438434&n=Jl-VYzkk85Fm2g&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhAIg4TTUoimqRN3ugqWU7fVYb2efA0ORbumvkH5zmNBtlAiBwBVYzM27RRfoSpsowxwaVo3vpY9tNjFb32E7fH76oJg%3D%3D&video_id=f8_r3CH1Q0c&cm2rm=sn-n4vsl76&rrc=80,104&fexp=24350516,24350518&req_id=8e1cf13dcd0a3ee&redirect_counter=2&rm=sn-a5meed7l&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=Az&mip=49.207.177.28&mm=34&mn=sn-npoe7nsr&ms=ltu&mt=1721576715&mv=u&mvi=3&pl=22&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AHlkHjAwRAIgDfId_CaetXV6WxsVtFGjQMYhVlHZ3vaAg9PeeSYHbF8CIDbiZn1b0WHHnANmS0nHCtNOIKrWiAc_N1evCbNs2CW3";
const videoSrc =
  "https://www.youtube.com/embed/SgOEULaw4D8?si=x8143R9J05X1oZMd";
const Thefreeones = () => {
  return (
    <Main
      backgroundImage={"/bg2.jpg"}
      gridItems={gridItems}
      paragraph={paragraph}
      videoSrc={videoSrc}
      titleImg={thefreeones}
    />
  );
};

export default Thefreeones;
