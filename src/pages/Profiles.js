import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import { profiles } from "../data/data.js";
import "./Profiles.css";

const Profiles = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="profiles-page">
      <h1>Profiles</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search profiles by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="profile-grid">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))
        ) : (
          <p>No profiles found.</p>
        )}
      </div>
    </div>
  );
};

export default Profiles;
