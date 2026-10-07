import React from "react";

function ProfileCard() {
  return (
    <div className="card">
      <img
        src="profile.jpg"
        alt="Profile"
        className="profile-image"
      />

      <h1>Hello Full Stack Developer!</h1>

      <div className="skills">
        <span className="html">HTML&CSS</span>
        <span className="php">PHP</span>
        <span className="js">JavaScript</span>
      </div>

      <button className="hire-btn">
        Hire me!
      </button>
    </div>
  );
}

export default ProfileCard;