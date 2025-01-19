import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ profile }) => {
  const handleMapClick = () => {
    window.open(
      `https://www.google.com/maps?q=${encodeURIComponent(profile.address)}`,
      "_blank"
    );
  };

  return (
    <div className="profile-card">
      <img src={profile.photo} alt={`${profile.name}`} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <button onClick={handleMapClick}>View on Map</button>
    </div>
  );
};

export default ProfileCard;
