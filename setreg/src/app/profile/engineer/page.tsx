"use client";

import React, { useState } from "react";
import "./styles.css";
import Image from "next/image";

export default function EngineerProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John",
    about:
      "I'm an experienced software engineer and highly proficient in software engineering, system analysis and design, web development, software and system architecture with about 5 years working experience. I'm highly competent in these skills and deliver very well-documented and detailed projects.",
    skills: [
      "Software engineer",
      "Content writer",
      "Systems engineer",
      "System analyst",
      "Software designer",
    ],
    location: "United Kingdom",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const file = event.target.files?.[0];
    if (file) {
      type === "cv" ? setCvFile(file) : setCoverLetterFile(file);
    }
  };

  const handleSave = () => {
    // Save updated profile logic
    setIsEditing(false);
  };

  return (
    <div className="engineer-profile-container">
      {/* Header Section */}
      <header className="engineer-header">
        <div className="profile-info">
          <Image
            src="/avatar-placeholder.png"
            alt="Engineer Avatar"
            width={120}
            height={120}
            className="avatar"
          />
          {isEditing ? (
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="edit-name-input"
            />
          ) : (
            <div className="profile-details">
              <h1>{profile.name}</h1>
              <p className="rating">
                ★★★★★ <span className="rating-score">5.0 (30)</span>
              </p>
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

      {/* About Section */}
      <section className="about-section">
        <h2>About Me</h2>
        {isEditing ? (
          <textarea
            value={profile.about}
            onChange={(e) => setProfile({ ...profile, about: e.target.value })}
            className="edit-about-textarea"
          />
        ) : (
          <p>{profile.about}</p>
        )}
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills</h2>
        {isEditing ? (
          <textarea
            value={profile.skills.join(", ")}
            onChange={(e) =>
              setProfile({ ...profile, skills: e.target.value.split(", ") })
            }
            className="edit-skills-textarea"
          />
        ) : (
          <div className="skills-tags">
            {profile.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <h2>Portfolio</h2>
        <div className="portfolio-item">
          <Image
            src="/portfolio-image.png"
            alt="Portfolio Diagram"
            width={400}
            height={200}
            className="portfolio-image"
          />
          <div className="portfolio-description">
            <h3>System Requirement Specification</h3>
            <p>
              This document is a System Requirement Specification (SRS) which is a detailed
              guide for software and system design.
            </p>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="upload-section">
        <h2>Upload Documents</h2>
        <div className="upload-container">
          <div className="upload-item">
            <label htmlFor="cv-upload">Upload CV</label>
            <input
              type="file"
              id="cv-upload"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileUpload(e, "cv")}
            />
            {cvFile && <p className="uploaded-file">Uploaded: {cvFile.name}</p>}
          </div>
          <div className="upload-item">
            <label htmlFor="cover-letter-upload">Upload Cover Letter</label>
            <input
              type="file"
              id="cover-letter-upload"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileUpload(e, "coverLetter")}
            />
            {coverLetterFile && (
              <p className="uploaded-file">Uploaded: {coverLetterFile.name}</p>
            )}
          </div>
        </div>
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

