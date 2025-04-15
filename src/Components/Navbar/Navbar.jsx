import React from "react";
import "./Navbar.css";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Logo from "../../assets/youtube.svg";
import Search from "../../assets/search.svg";
import Upload from "../../assets/upload.svg";
import more from "../../assets/more.svg";
import notification from "../../assets/notification.svg";
import profil from "../../assets/profil.jpg";
const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
     <h2 className="bars" onClick={()=>setSidebar(prev=>prev===false?true:false)}>   <HiBars3BottomLeft /></h2>
        <img className="logo" src={Logo} alt="" />
      </div>
      <div className="nav-middle flex-div">
        
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={Search} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={Upload} alt="" />
        <img src={more} alt="" />
        <img src={notification} alt="" />
        
        <img src={profil} className="user-icon" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
