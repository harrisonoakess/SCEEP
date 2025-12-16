// src/pages/Programs.jsx (or wherever your Programs file lives)
import React, { useEffect } from 'react';
import waiverDoc from '../assets/waivers/RELEASE AND WAIVER OF LIABILITY.docx.pdf';
import './Programs.css';

const ProgramSection = ({
  id,
  title,
  tagline,
  description,
  dates,
  registrationAndPayment,
  whatToBring,
  imageLeft,
  imageRight,
}) => (
  <section id={id} className="program-section">
    <div className="program-content">
      {imageLeft && (
        <div className="program-image program-image-left">
          <img src={imageLeft} alt={`${title} left`} />
        </div>
      )}

      <div className="program-details">
        <h2>{title}</h2>
        {tagline && <p className="program-tagline">{tagline}</p>}
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

        {registrationAndPayment && (
          <>
            <h3>Registration & Payment Information</h3>
            <ul>
              {registrationAndPayment.map((item, index) => (
                <li key={index}>{item}</li>
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
      <div className="esa-note">
        <p>
          <strong>Note:</strong> ESA accepted for all programs. Contact Laurie Brimhall if you need a
          receipt, ESA credentials, or more information.
        </p>
      </div>

      <ProgramSection
        id="day-at-the-farm"
        title="Day at the Farm with Horses"
        tagline="Saddle up and start your horse journey—fun for all ages!"
        description="Spend a fun-filled 3 hours at the farm getting to know our amazing horses! This hands-on experience includes a riding lesson, horse care activities, and plenty of time to connect with the animals in a relaxed, supportive environment. Whether you're new to horses or just want more time in the barn, 'Day at the Farm' is a perfect way to learn, explore, and enjoy the magic of horses. This program is geared for ages five and older."
        dates={[
          'January 10, 2026',
          'January 24, 2026',
          'February 7, 2026',
          'February 28, 2026',
          'March 21, 2026',
          'March 28, 2026',
          'April 11, 2026',
          'April 18, 2026',
          'May 9, 2026',
          'May 16, 2026',
          'Each day is from 10:00 AM - 1:00 PM and costs $50 per day',
          'Classes located in Snowflake, AZ',
          'ESA accepted',
          'Text Laurie Brimhall at (480) 518-5662 to enroll',
          'In the event of inclement weather, there will be unmounted horsemanship learning activities',
        ]}
        whatToBring={[
          'Long pants (jeans recommended)',
          'Closed-toe shoes (boots preferred)',
          'Water bottle',
          'Sunscreen and hat',
          'Dress for the weather',
        ]}
      />

      <ProgramSection
        id="private-horsemanship"
        title="Private Horsemanship Lessons"
        tagline=""
        description="Our Horsemanship Lessons offer instruction tailored to each rider’s goals, experience level, and learning style. Whether you're just starting or looking to refine your skills, these sessions focus on both riding and ground-based horsemanship. Lessons are available using your horse or one of our well-trained school horses. Build confidence, improve communication, and deepen your partnership with horses in a supportive and encouraging environment."
        dates={[
          'Scheduled based on availability',
          'Contact us for pricing',
          'Text Laurie Brimhall at (480) 518 - 5662 to enroll',
          'In the event of inclement weather, there will be unmounted horsemanship learning activities',
        ]}
        whatToBring={[
          'Long pants (jeans recommended)',
          'Closed-toe shoes (boots preferred)',
          'Water bottle',
          'Dress for the weather',
        ]}
      />

      <ProgramSection
        id="summer-horse-camp"
        title="Summer Horse Camp"
        tagline="Learn, Ride, Grow — Payment due by May 31"
        description={
          <>
            Join us for an unforgettable time at the Silver Creek Equestrian Education Program’s Summer
            Horse Camp! Open to riders of all levels, our camp offers hands-on horse care, daily riding
            lessons, barn activities, and fun team games—all in a safe, supportive environment.
            <br />
            <br />
            <strong>Camp will run rain, shine, or wind.</strong>{' '}
            <a href={waiverDoc} download>
              Waiver
            </a>{' '}
            must be signed before participation — print your texted liability waiver or pick one up on
            the first day.
            <br />
            <br />
            Contact Laurie Brimhall if you need a receipt, ESA credentials, or more info. Follow us on{' '}
            <a
              href="https://www.facebook.com/profile.php?id=61563387476926"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{' '}
            for updates!
          </>
        }
        dates={[
          'Session 1: June 8–10, 2026',
          'Session 2: June 23–25, 2026',
          'Session 3: June 29–July 1, 2026',
          'Morning Camp: 7:30 AM–11:30 AM ($150)',
          'Afternoon Camp: 1:00 PM–5:00 PM ($150)',
          'Full Day Camp: 7:30 AM–5:00 PM ($340)',
        ]}
        registrationAndPayment={[
          "Registration begins February 1, 2026",
          "Text Laurie Brimhall at (480) 518-5662 to register",
          "A $50 nonrefundable fee is due at registration (applied toward camp total)",
          "Payment due by May 31, 2026",
          "Waiver must be signed before participation",
        ]}
        whatToBring={[
          'Lunch (for full-day campers)',
          'Snacks (for morning/afternoon campers)',
          'Water bottle',
          'Completed liability waiver',
          'Long pants for riding',
          'Boots with a heel (if you can)',
          'Hat',
          'Sun block',
          'Please label everything!',
        ]}
      />

      <ProgramSection
        id="pony-pals"
        title="Pony Pals"
        tagline="Pony Pals — Ride, learn, and explore with friends!"
        description="Pony Pals is a fun and educational program that meets four hours per week, typically divided into two weekly sessions. This is a perfect program for young horse lovers who want to deepen their understanding and skills. Each participant is assigned their own horse to care for and ride during the session. Activities include both mounted and unmounted learning including riding lessons, trail rides, grooming, feeding, stall cleaning, and groundwork. Pony Pals helps build confidence, responsibility, and a strong bond between rider and horse in a supportive and hands-on environment."
        dates={[
          'Tuesdays and Thursdays from 4:00pm - 6:00pm (currently full)',
          '$300 per month',
          'In the event of inclement weather, there will be unmounted horsemanship learning activities',
        ]}
        whatToBring={[
          'Long pants (jeans recommended)',
          'Closed-toe shoes (boots preferred)',
          'Water bottle',
          'Dress for the weather',
        ]}
      />

      <ProgramSection
        id="dirt-road-riders"
        title="Dirt Road Riders"
        tagline="Dirt Road Riders: Learning, leading, lifting each other."
        description="Dirt Road Riders is a team of dedicated youth who support and encourage fellow students on their horsemanship journey. Many of our members participate actively in the horse 4-H program and bring valuable experience, leadership, and a passion for helping others learn and grow. Whether lending a hand in the barn, guiding new riders, or leading by example in the arena, Dirt Road Riders are committed to building a strong, supportive, and fun equestrian community."
      />

      <ProgramSection
        id="equine-apprenticeship"
        title="Equine Apprenticeship Program"
        tagline="Train hard. Care deeply. Ride smart."
        description="The Silver Creek Equine Apprenticeship Program will develop the next generation of horse professionals and passionate equestrians through immersive, hands-on experience. Participants gain in-depth education in all facets of horsemanship—including riding, horse care, stable management, and leadership—within a real-world, supportive learning environment. The program fosters responsibility, confidence, and a lifelong commitment to growth and excellence in equine care."
        dates={['Contact us for program details and application process']}
      />
    </div>
  );
};

export default Programs;
