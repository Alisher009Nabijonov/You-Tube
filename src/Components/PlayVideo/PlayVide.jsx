import React from "react";
import "./PlayVIdeo.css";

// assets
import img1 from "../../assets/profil.jpg";
import Video1 from "../../assets/video.mp4";
// icon
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { BsFillSaveFill } from "react-icons/bs";

const PlayVide = () => {
  return (
    <div className="play-video">
      <video src={Video1} controls autoPlay muted></video>
      <h3>Best youTube Channel To Learn Web Development</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span>
            <AiFillLike />
            125
          </span>
          <span>
            <AiFillDislike />2
          </span>
          <span>
            <FaShare />
            Share
          </span>
          <span>
            <BsFillSaveFill />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={img1} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel tht makes learning Easy</p>
        <p>Subscribe GreatStack to Watch More Tutorials on web Development</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={img1} alt="" />
          <div>
            <h3>jack Nicholson <span>1cday ago</span></h3>
            <p>ubscribe GreatStack to Watch More Tutorials on web Development
            ubscribe GreatStack to Watch More Tutorials on web Development
            </p>
            <div className="comment-action">
              <h4><AiFillLike/></h4>
              <span>244</span>
              <h4><AiFillDislike/></h4>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={img1} alt="" />
          <div>
            <h3>jack Nicholson <span>1cday ago</span></h3>
            <p>ubscribe GreatStack to Watch More Tutorials on web Development
            ubscribe GreatStack to Watch More Tutorials on web Development
            </p>
            <div className="comment-action">
              <h4><AiFillLike/></h4>
              <span>244</span>
              <h4><AiFillDislike/></h4>
            </div>
          </div>
        </div>  <div className="comment">
          <img src={img1} alt="" />
          <div>
            <h3>jack Nicholson <span>1cday ago</span></h3>
            <p>ubscribe GreatStack to Watch More Tutorials on web Development
            ubscribe GreatStack to Watch More Tutorials on web Development
            </p>
            <div className="comment-action">
              <h4><AiFillLike/></h4>
              <span>244</span>
              <h4><AiFillDislike/></h4>
            </div>
          </div>
        </div>  <div className="comment">
          <img src={img1} alt="" />
          <div>
            <h3>jack Nicholson <span>1cday ago</span></h3>
            <p>ubscribe GreatStack to Watch More Tutorials on web Development
            ubscribe GreatStack to Watch More Tutorials on web Development
            </p>
            <div className="comment-action">
              <h4><AiFillLike/></h4>
              <span>244</span>
              <h4><AiFillDislike/></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVide;
