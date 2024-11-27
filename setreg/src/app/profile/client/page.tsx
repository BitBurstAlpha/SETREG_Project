"use client";

import React, { useState } from "react";
import "./styles.css";
import Image from "next/image";

export default function ClientProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    companyName: "Arch Engineering",
    projectDescription:
      "Arch Engineering is developing a cutting-edge SaaS product for project management and collaboration. We are looking for engineers to help us enhance the platform with innovative features.",
    lookingFor:
      "We are seeking experienced full-stack developers with expertise in React, Node.js, and AWS, along with a strong understanding of software architecture and performance optimization.",
    location: "San Francisco, USA",
    logo: "/company-logo-placeholder.jpg", // Default logo
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Update logo with a local preview
      const reader = new FileReader();
      reader.onload = () => {
        setProfile((prev) => ({ ...prev, logo: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Save updated client profile logic
    setIsEditing(false);
  };

  return (
    <div className="engineer-profile-container">
      {/* Header Section */}
      <header className="engineer-header">
        <div className="profile-info">
          <div className="avatar-container">
            <Image
              src={profile.logo}
              alt="Company Logo"
              width={120}
              height={120}
              className="avatar"
            />
            {isEditing && (
              <div className="edit-logo">
                <label htmlFor="logo-upload" className="upload-label">
                  Change Logo
                </label>
                <input
                  type="file"
                  id="logo-upload"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>
            )}
          </div>
          {isEditing ? (
            <input
              type="text"
              value={profile.companyName}
              onChange={(e) =>
                setProfile({ ...profile, companyName: e.target.value })
              }
              className="edit-name-input"
            />
          ) : (
            <div className="profile-details">
              <h1>{profile.companyName}</h1>
              <p className="location">📍 {profile.location}</p>
            </div>
          )}
        </div>
        <button
          className="edit-profile-btn"
          onClick={() => setIsEditing((prev) => !prev)}
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </header>

      {/* Project Description Section */}
      <section className="about-section">
        <h2>Project Description</h2>
        {isEditing ? (
          <textarea
            value={profile.projectDescription}
            onChange={(e) =>
              setProfile({ ...profile, projectDescription: e.target.value })
            }
            className="edit-about-textarea"
          />
        ) : (
          <p>{profile.projectDescription}</p>
        )}
      </section>

      {/* Looking For Section */}
      <section className="skills-section">
        <h2>What We’re Looking For</h2>
        {isEditing ? (
          <textarea
            value={profile.lookingFor}
            onChange={(e) =>
              setProfile({ ...profile, lookingFor: e.target.value })
            }
            className="edit-skills-textarea"
          />
        ) : (
          <p>{profile.lookingFor}</p>
        )}
      </section>

      {/* Save Changes Button */}
      {isEditing && (
        <div className="save-button-container">
          <button className="save-btn" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}

