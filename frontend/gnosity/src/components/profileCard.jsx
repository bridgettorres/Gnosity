import { useState } from "react";
import "./style/card.css";
import "./style/profileCard.css";
import mascot from "../assets/mascot.png";
import mascot2 from "../assets/mascot_2.png";
import mascot3 from "../assets/mascot_3.png";
import left_arrow from "../assets/left_arrow.svg";
import right_arrow from "../assets/right_arrow.svg";


const ProfileCard = () => {
  const [currentMascot, setCurrentMascot] = useState(0);
  const mascots = [mascot, mascot2, mascot3];

  const nextMascot = () => {
    setCurrentMascot((prev) => (prev + 1) % mascots.length);
  };

  const prevMascot = () => {
    setCurrentMascot((prev) => (prev - 1 + mascots.length) % mascots.length);
  };

  return (
    <div className="card" id="profile">
        <div className="mascot-display">
          {/* Left Arrow */}
          <div className="arrow-wrapper left">
            {currentMascot > 0 && (
              <button className="profile-btn arrow" onClick={prevMascot}>
                  <img src={left_arrow} alt="Previous mascot" />
              </button>
            )}
          </div>

          {/* Mascot Container */}
          <div className="mascot-container">
            {/* Carousel: display only the current mascot */}
            {mascots.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Mascot ${index + 1}`}
                className={`mascot-img ${index === currentMascot ? 'visible' : 'hidden'}`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <div className="arrow-wrapper right">
            {currentMascot < mascots.length - 1 && (
              <button className="profile-btn arrow" onClick={nextMascot}>
                  <img src={right_arrow} alt="Next mascot" />
              </button>
            )}
          </div>
        </div>

        <div className="userContent">
            <h3>User1234</h3>
            <div className="progress-section">
              <span className="progress-bar"></span>
              <div className="exp">
                  <span id="exp_value"><p>???</p></span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard;
