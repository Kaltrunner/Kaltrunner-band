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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/02dTcTkEcfg?si=qd5rewojVee9K8zL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          {/* <video className="kaltVideo" controls>
            <source
             
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
          <p className="video-text">
            Audio • "Intruder" taken from the album Dirteater II, originally released
            july 2021 by: KALTRUNNER <br /> Visuals • Filmed & edited february –
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
          </p>
        </div>
      </div>
    </div>
  );
}

export default Videos;
