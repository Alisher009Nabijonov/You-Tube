import React from "react";
import "./Sidebar.css";

// icon
import { GoHomeFill } from "react-icons/go";
import { IoGameController } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa";
import { MdSportsBasketball } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { MdLibraryMusic } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";

// assets img
import profil from "../../assets/profil.jpg";



const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <h3>
            <GoHomeFill />
          </h3>
          <p>Home</p>
        </div>
        <div
          className={`side-link ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <h3>
            <IoGameController />
          </h3>
          <p>Gaming</p>
        </div>
        <div
          className={`side-link ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <h3>
            <FaCarSide />
          </h3>
          <p>Automobiles</p>
        </div>
        <div
          className={`side-link ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <h3>
            <MdSportsBasketball />
          </h3>
          <p>Sports</p>
        </div>
        <div
          className={`side-link ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <h3>
            <MdLiveTv />
          </h3>
          <p>Entertainment</p>
        </div>

        <div
          className={`side-link ${category === 18 ? "active" : ""}`}
          onClick={() => setCategory(18)}
        >
          <h3>
            <GrTechnology />
          </h3>
          <p>Technology</p>
        </div>
        <div
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <h3>
            <MdLibraryMusic />
          </h3>
          <p>Music</p>
        </div>
        <div
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <h3>
            <FaBlog />
          </h3>
          <p>Blogs</p>
        </div>
        <div
          className={`side-link ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <h3>
            <IoNewspaper />
          </h3>
          <p>News</p>
        </div>

        <hr />
      </div>
      <div className="subscribed-list">
        <h2>Subscribed</h2>
        <div className="side-link">
          <img src={profil} alt="" />
          <p>PewDioPio</p>
        </div>
        <div className="side-link">
          <img src={profil} alt="" />
          <p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={profil} alt="" />
          <p>Justin Bieber</p>
        </div>
        {/* <div className="side-link">
            <img src={profil} alt="" /><p>5-minute Crafts</p>
          </div> */}
        <div className="side-link">
          <img src={profil} alt="" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
