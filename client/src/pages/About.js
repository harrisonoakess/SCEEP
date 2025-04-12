import React from 'react';
import './About.css';

import LaurieBrimhall from "../assets/images/aboutPageProfiles/LaurieBrimhall1.jpg"
import JayOhaco from "../assets/images/aboutPageProfiles/JayOhaco.jpg"
import LexiGardner from "../assets/images/aboutPageProfiles/LexiGardner.jpg"

const About = () => {
  // Staff Data
  const staff = [
    {
      name: 'Laurie Brimhall',
      role: 'Founder & Head Instructor',
      bio: 'Laurie has over 20 years of experience in equestrian education and is passionate about teaching young riders the joys of horsemanship. She founded Silver Creek to share her love of horses with the community.',
      photo: LaurieBrimhall
    },
    {
      name: 'Jay Ohaco',
      role: 'Riding Instructor',
      bio: `Jay was born in England and raised in Santa Monica, California. For 10 years she learned and worked for a British Horse Society riding instructor. She has many 
            years of Eventing experience and has worked for several Grand Prix dressage riders.  A difficult horse brought her to Ray Hunt, Buck Brannaman, and Bryan Neubert. 
            She has ridden and taught full-time for over 30 years, has an eclectic, easy approach, and is teaching English and Western lessons. Jay and her husband, Jeff, 
            moved to Snowflake a few years ago and love the people and families in this area! We are so happy to have her in our program!`,
      photo: JayOhaco
    },
    {
      name: 'Lexi Gardner',
      role: 'Horse Care Specialist',
      bio: 'Bio goes here',
      photo: LexiGardner
    },
    // {
    //     name: 'Jill Knudsen',
    //     role: 'Horse Care Specialist',
    //     bio: 'Mark ensures all the horses at Silver Creek are healthy and happy. He teaches students the importance of proper horse care and grooming.',
    //     photo: '/assets/images/staff-mark.jpg', // Placeholder image path
    //   },
  ];

  return (
    <div className="about-page">
      {/* The Header is already included in App.js, so we don't need to add it here */}

      {/* Staff Section */}
      <section className="staff-section">
        <h2>Meet Our Team</h2>
        <div className="staff-list">
          {staff.map((member, index) => (
            <div key={index} className="staff-card">
              <img src={member.photo} alt={member.name} className="staff-photo" />
              <h3>{member.name}</h3>
              <p className="staff-role">{member.role}</p>
              <p className="staff-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <h2>The Story of Silver Creek Equestrian Program</h2>
        <p>
          Silver Creek Equestrian Program was founded in 2015 by Laurie Brimhall in Snowflake, Arizona, with a mission to bring the joy of horsemanship to children and families in the community. Laurie grew up on a ranch, surrounded by horses, and always dreamed of creating a space where kids could learn to ride, care for horses, and build confidence through hands-on experiences. What started as a small homeschool program has grown into a thriving equestrian education center, offering a variety of programs including riding lessons, summer camps, and community events like Day at the Farm with Horses. Today, Silver Creek continues to foster a love for horses while teaching valuable life skills such as responsibility, teamwork, and perseverance.
        </p>
      </section>
    </div>
  );
};

export default About;