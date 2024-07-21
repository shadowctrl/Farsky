import "./footer.css";

const Footer = ({ videoSrc }) => {
  return (
    <div className="main-sub-section">
      <div className="yt-video-main">
        <iframe
          className="yt-video"
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h2 className="req-head">System Requirements (Minimum):</h2>
        <div className="main-req">
          <div>
            <h2>OS:</h2>
            <p>
              Windows: XP or later <br />
              Mac: 10.7.5 (Lion) or later <br />
              Linux: Ubuntu 12.04
            </p>
          </div>
          <div>
            <h2>Memory:</h2>
            <p>2 GB RAM</p>
          </div>
          <div>
            <h2>Graphics:</h2>
            <p>Dedicated graphics card (OpenGL 2.0)</p>
          </div>
          <div>
            <h2>Storage:</h2>
            <p>500 MB available space</p>
          </div>
          <div>
            <h2>Additional Notes:</h2>
            <p>Java required</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
