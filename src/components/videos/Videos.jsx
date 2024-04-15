import AlbumNav from "../albumNav/AlbumNav";
import "./videos.css";

function Videos() {
  return (
    <div className="videos-body-div">
      <div className="videos-overlay"></div>
      <AlbumNav />
      <div className="videos-content-div">
        <h1 className="videos-header">Audio / Visual<br/> (Coming Soon)</h1>
        <div className="video-div">
          {/* <video className="kaltVideo" controls>
            <source
             
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
          {/* <p className="video-text">
            Audio • "Intruder" taken from the album Dirteater II, originally released
            july 2021 by: KALTRUNNER <br /> Visual • Filmed & edited february –
            April 2024 by:{" "}
            <a
              className="peter-link-under-line, "
              id="peter-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.landpractice.com/"
            >
              Peter Russell
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Videos;
