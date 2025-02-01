import React from 'react'
import './HomePage.css';

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        We are a team of passionate developers committed to building great web applications. Our mission is to create user-friendly and innovative solutions that make a difference.
      </p>
      <div className="about-team">
        <h2>Meet Our Team</h2>
        <ul className='team-list'>
          <li>Satya Suman Sahoo- CEO</li>
          <li>Jane Smith - Lead Developer</li>
          <li>Emily Johnson - UI/UX Designer</li>
        </ul>
      </div>
    </div>
  )
}
