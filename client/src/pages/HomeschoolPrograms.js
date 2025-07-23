import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Programs.css'; // reuse same styles

const ProgramSection = ({ id, title, tagline, description, dates, whatToBring }) => (
  <section id={id} className="program-section">
    <div className="program-content">
      <div className="program-details">
        <h2>{title}</h2>
        {tagline && <p className="program-tagline">{tagline}</p>}
        <p>{description}</p>

        {dates?.length > 0 && (
          <>
            <h3>Dates & Times</h3>
            <ul className="program-dates">{dates}</ul>
          </>
        )}

        {whatToBring?.length > 0 && (
          <>
            <h3>What to Bring</h3>
            <ul>{whatToBring.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
          </>
        )}
      </div>
    </div>
  </section>
);

const HomeschoolPrograms = () => {
  const { hash } = useLocation(); // 👈 Get current hash

  useEffect(() => {
    if (hash) {
      // Delay scrolling to make sure the element is mounted
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100); // small delay
    }
  }, [hash]);

  return (
    <div className="programs-page">
      <div className="esa-note">
        <p><strong>Note:</strong> ESA accepted for all homeschool programs.</p>
      </div>

      <ProgramSection
        id="homeschool-horse-class"
        title="Homeschool Horse Class"
        tagline="Hands-on learning with real horses—no riding experience needed!"
        description="Our homeschool Horse Class is a hands-on learning experience designed 
                    for homeschool students who love horses! Meeting four times per month for 1.5 hours, 
                    this class focuses on equine science, horse care, safety, equipment, behavior, and 
                    the basics of horsemanship. It's a great way for students to build knowledge, 
                    responsibility, and confidence while learning alongside fellow horse enthusiasts in 
                    a fun, educational setting. There will be eight unmouted sessions and four riding sessions in this 12 week class. Instructor: Jay Ohaco"
        dates={[
          <li key="tues">Tuesdays 10:30 am - 12:00 pm</li>,
          <li key="tues-1" className="sub-date">- 9/2 - 11/25</li>,
          <li key="tues-2" className="sub-date">- 12 classes</li>,
          <li key="tues-3" className="sub-date">- $350</li>,
          <li key="tues-4" className="sub-date">- limited availability</li>,
        ]}
        whatToBring={[
          "Long pants",
          "Closed-toe shoes or boots",
          "Water bottle",
          "Dress for the weather",
        ]}
      />


<ProgramSection
  id="homeschool-pony-pals"
  title="Homeschool Pony Pals"
  tagline="The perfect introduction to horses for young homeschoolers!"
  description="Homeschool Pony Pals is a fun and educational program that meets once per week
              for two hours and is perfect for young horse lovers who want to deepen their
              understanding and skills. Each participant is assigned their own horse to care for and
              ride during the session. Activities include both mounted and unmounted learning
              including riding lessons, trail rides, grooming, feeding, stall cleaning, and groundwork.
              Pony Pals helps build confidence, responsibility, and a strong bond between rider and
              horse in a supportive and hands-on environment. Instructor: Jay Ohaco"
  dates={[
    <li key="mon">Mondays 10:30 am - 12:30 pm</li>,
    <li key="mon-1" className="sub-date">- September - May</li>,
    <li key="mon-2" className="sub-date">- 4 classes per month</li>,
    <li key="mon-3" className="sub-date">- $200 per month</li>,
    <li key="mon-4" className="sub-date">- limited availability</li>,
    <li key="wed" style={{ marginTop: '1em' }}>Wednesdays 10:30 am - 12:30 pm</li>,
    <li key="wed-1" className="sub-date">- September - May</li>,
    <li key="wed-2" className="sub-date">- 4 classes per month</li>,
    <li key="wed-3" className="sub-date">- $200 per month</li>,
    <li key="wed-4" className="sub-date">- limited availability</li>,
  ]}
  whatToBring={[
    "Long pants",
    "Closed-toe shoes or boots",
    "Water bottle",
    "Dress for the weather",
  ]}
/>

    </div>
  );
};

export default HomeschoolPrograms;
