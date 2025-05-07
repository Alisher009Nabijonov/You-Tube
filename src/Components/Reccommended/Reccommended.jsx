import React, { useEffect, useState } from "react";
import "./Reccommended.css";
// assets
import img2 from "../../assets/profil.jpg";
import { API_KEY } from "../../data";
const Reccommendend = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${videoId}&key=${API_KEY}`;
    await fetch(relatedVideo_url)
      .then((res) => res.json)
      .then((data) => setApiData(data.items));
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        return (
          <div key={index} className="side-video-list">
            <img src={img2} alt="" />
            <div>
              <h4>Best channel that help you to be a web developer</h4>
              <p>GreatStack</p>
              <p>199k Views</p>
            </div>
          </div>
          
        );
      })}
    </div>
  );
};

export default Reccommendend;
