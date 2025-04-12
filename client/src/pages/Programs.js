import React, { useEffect } from 'react';
import './Programs.css';

const ProgramSection = ({ id, title, description, dates, whatToBring, imageLeft, imageRight }) => (
  <section id={id} className="program-section">
    <div className="program-content">
      {imageLeft && (
        <div className="program-image program-image-left">
          <img src={imageLeft} alt={`${title} left`} />
        </div>
      )}
      <div className="program-details">
        <h2>{title}</h2>
        <p>{description}</p>
        {dates && (
          <>
            <h3>Dates & Times</h3>
            <ul>
              {dates.map((date, index) => (
                <li key={index}>{date}</li>
              ))}
            </ul>
          </>
        )}
        {whatToBring && (
          <>
            <h3>What to Bring</h3>
            <ul>
              {whatToBring.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      {imageRight && (
        <div className="program-image program-image-right">
          <img src={imageRight} alt={`${title} right`} />
        </div>
      )}
    </div>
  </section>
);

const Programs = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="programs-page">
      <ProgramSection
        id="homeschool-horsemanship"
        title="Homeschool Horsemanship"
        description="Basic horse skills, horse care, and hands-on working with horses (non-riding class)."
        dates={[
          "Horse Class: Mondays, 10:30–12 ($100 per month – meets 4 times)",
          "Pony Class: Tuesdays, 10:30–12 ($50 per month – meets 2 times)",
        ]}
      />

      <ProgramSection
        id="private-horsemanship"
        title="Private Horsemanship/Riding Lessons"
        description="Offered during the day based on availability."
      />

      <ProgramSection
        id="day-at-the-farm"
        title="Day at the Farm with Horses"
        description="This three-hour program is offered two Saturdays each month and includes group riding lessons, hands-on horse care, and confidence-building activities. Geared for ages 9 and older."
        dates={[
          "Saturdays: April 5, April 12, May 3, May 10",
          "11:00–2:00 pm ($50 per day)",
        ]}
      />

      <ProgramSection
        id="saddle-club"
        title="Saddle Club"
        description="Similar to Day at the Farm but geared towards ages 5–8 (older ages are welcome as well!)."
        dates={[
          "Friday, April 11 from 3–5 pm ($50)",
          "Friday, May 2 from 3–5 pm ($50)",
        ]}
      />

      <ProgramSection
        id="summer-horse-camp"
        title="Summer Horse Camp"
        description="Join us for an exciting Summer Horse Camp with three sessions in June! Choose between morning, afternoon, or full-day options."
        dates={[
          "Session 1: June 9–11",
          "Session 2: June 16–18",
          "Session 3: June 23–25",
          "Morning Camp: 7:30–11:30 ($150)",
          "Afternoon Camp: 1:00–5:00 ($150)",
          "Full Day Camp: 7:30–5:00 ($340)",
          "ESA Accepted",
        ]}
        whatToBring={[
          "Long pants (jeans recommended)",
          "Closed-toe shoes (boots preferred)",
          "Water bottle",
          "Sunscreen and hat",
          "Snacks (for morning/afternoon sessions) or lunch (for full-day sessions)",
          "A positive attitude!",
        ]}
        // Placeholder image paths (replace with actual images)
        // imageLeft="/path/to/summer-horse-camp-left.jpg"
        // imageRight="/path/to/summer-horse-camp-right.jpg"
      />
    </div>
  );
};

export default Programs;