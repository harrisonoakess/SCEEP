import React, { useEffect } from 'react';
import waiverDoc from '../assets/waivers/RELEASE AND WAIVER OF LIABILITY.docx.pdf'
import './Programs.css';

const ProgramSection = ({ id, title, tagline, description, dates, whatToBring, imageLeft, imageRight }) => (
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
        <p><strong>Note:</strong> ESA accepted for all programs.</p>
      </div>

      <ProgramSection
        id="day-at-the-farm"
        title="Day at the Farm with Horses"
        tagline="Saddle up and start your horse journey—fun for all ages!"
        description="Spend a fun-filled 3 hours at the farm getting to know our amazing horses! This hands-on experience includes a riding lesson, horse care activities, and plenty of time to connect with the animals in a relaxed, supportive environment. Whether you're new to horses or just want more time in the barn, 'Day at the Farm' is a perfect way to learn, explore, and enjoy the magic of horses."
        dates={[
          "Fall schedule will be posted in August",
          "3 hours per session ($50 per day)",
        ]}
        whatToBring={[
          "Long pants (jeans recommended)",
          "Closed-toe shoes (boots preferred)",
          "Water bottle",
          "Sunscreen and hat",
        ]}
        // imageLeft="/assets/images/day-at-the-farm-left.jpg"
        // imageRight="/assets/images/day-at-the-farm-right.jpg"
      />

      {/* <ProgramSection
        id="saddle-club"
        title="Saddle Club"
        tagline="Saddle up and start your horse journey—fun for all ages!"
        description="Saddle Club is the perfect introduction to the world of horses for kids ages 5-8, though older children are always welcome to join the fun! In this 2-hour class, young riders will enjoy a mix of unmounted activities, horse care, and beginner riding lessons. It’s all about building confidence, learning basic horsemanship skills, and having fun with horses in a safe and supportive environment. Each session is designed to engage children educationally and enjoyably!"
        dates={[
          "Contact us for current schedule",
          "2 hours per session ($50 per session)",
        ]}
        whatToBring={[
          "Long pants (jeans recommended)",
          "Closed-toe shoes (boots preferred)",
          "Water bottle",
          "Sunscreen and hat",
        ]}
        // imageLeft="/assets/images/saddle-club-left.jpg"
        // imageRight="/assets/images/saddle-club-right.jpg"
      /> */}

      <ProgramSection
        id="private-horsemanship"
        title="Private Horsemanship Lessons"
        tagline="One-on-one horsemanship—your goals, your pace."
        description="Our Private Horsemanship Lessons offer one-on-one instruction tailored to each rider’s goals, experience level, and learning style. Whether you're just starting or looking to refine your skills, these personalized sessions focus on both riding and ground-based horsemanship. Lessons are available using your horse or one of our well-trained school horses. Build confidence, improve communication, and deepen your partnership with horses in a supportive and encouraging environment."
        dates={[
          "Scheduled based on availability",
          "Contact us for pricing",
        ]}
        whatToBring={[
          "Long pants (jeans recommended)",
          "Closed-toe shoes (boots preferred)",
          "Water bottle",
        ]}
        // imageLeft="/assets/images/private-horsemanship-left.jpg"
        // imageRight="/assets/images/private-horsemanship-right.jpg"
      />

      <ProgramSection
        id="summer-horse-camp"
        title="Summer Horse Camp"
        tagline="Learn, Ride, Grow — Payment due by May 31"
        description={
          <>
            Join us for an unforgettable time at the Silver Creek Equestrian Education Program’s Summer Horse Camp! Open to riders of all levels, our camp offers hands-on horse care, daily riding lessons, barn activities, and fun team games—all in a safe, supportive environment.  
            <br/><br/>
            <strong>Camp will run rain, shine, or wind. </strong>  
            <a href={waiverDoc} download>Waiver</a> must be signed before participation — print your texted liability waiver or pick one up on the first day.  
            <br/><br/>
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
    "Session 1: June 9–11 (currently full)",
    "Session 2: June 16–18 (currently full)",
    "Session 3: June 23–25 (currently full)",
    "Morning Camp: 7:30–11:30 ($150)",
    "Afternoon Camp: 1:00–5:00 ($150)",
    "Full Day Camp: 7:30–5:00 ($340)",
    "Payment due by May 31"
  ]}
  whatToBring={[
    "Lunch (for full-day campers)",
    "Snacks (for morning/afternoon campers)",
    "Water bottle",
    "Completed liability waiver",
    "Long pants for riding",
    "Boots with a heel (if you can)",
    "Hat",
    "Sun block",
    "Please label everything!"
  ]}
/>

      <ProgramSection
        id="pony-pals"
        title="Pony Pals"
        tagline="Pony Pals — Ride, learn, and explore with friends!"
        description="Pony Pals is a fun and educational program that meets four hours per week, typically
                    divided into two weekly sessions. This is a perfect program for young horse lovers who
                    want to deepen their understanding and skills. Each participant is assigned their own
                    horse to care for and ride during the session. Activities include both mounted and
                    unmounted learning including riding lessons, trail rides, grooming, feeding, stall
                    cleaning, and groundwork. Pony Pals helps build confidence, responsibility, and a
                    strong bond between rider and horse in a supportive and hands-on environment."
        dates={[
          "Tuesdays and Thursdays from 4:00pm - 6:00pm (currently full)",
          "$300 per month",
        ]}
        whatToBring={[
          "Long pants (jeans recommended)",
          "Closed-toe shoes (boots preferred)",
          "Water bottle",
          "Dress for the weather",
        ]}
        // imageLeft="/assets/images/pony-pals-left.jpg"
        // imageRight="/assets/images/pony-pals-right.jpg"
      />

      {/* <ProgramSection
        id="horse-lease-program"
        title="Horse Lease Program"
        tagline="Grow your skills. Deepen your connection. Lease a horse today."
        description="Our Partial Horse Lease Program allows riders to care for and ride their own horse, without the full-time commitment of ownership. Riders enjoy two days per week of supervised time with horses (2 hours each day), with one of those days including a group lesson to continue building riding skills. Participants also take part in caring for their leased horse, learning responsibility, horsemanship, and the joy of developing a true horse-human partnership."
        dates={[
          "2 days per week, 2 hours per day",
          "Contact us for pricing and availability",
        ]}
        whatToBring={[
          "Long pants (jeans recommended)",
          "Closed-toe shoes (boots preferred)",
          "Water bottle",
        ]}
        // imageLeft="/assets/images/horse-lease-program-left.jpg"
        // imageRight="/assets/images/horse-lease-program-right.jpg"
      /> */}

      <ProgramSection
        id="dirt-road-riders"
        title="Dirt Road Riders"
        tagline="Dirt Road Riders: Learning, leading, lifting each other."
        description="Dirt Road Riders is a team of dedicated youth who support and encourage fellow students on their horsemanship journey. Many of our members participate actively in the horse 4-H program and bring valuable experience, leadership, and a passion for helping others learn and grow. Whether lending a hand in the barn, guiding new riders, or leading by example in the arena, Dirt Road Riders are committed to building a strong, supportive, and fun equestrian community."
        // imageLeft="/assets/images/dirt-road-riders-left.jpg"
        // imageRight="/assets/images/dirt-road-riders-right.jpg"
      />

      <ProgramSection
        id="equine-apprenticeship"
        title="Equine Apprenticeship Program"
        tagline="Train hard. Care deeply. Ride smart."
        description="The Silver Creek Equine Apprenticeship Program will develop the next generation of horse professionals and passionate equestrians through immersive, hands-on experience. Participants gain in-depth education in all facets of horsemanship—including riding, horse care, stable management, and leadership—within a real-world, supportive learning environment. The program fosters responsibility, confidence, and a lifelong commitment to growth and excellence in equine care."
        dates={[
          "Contact us for program details and application process",
        ]}
        // imageLeft="/assets/images/equine-apprenticeship-left.jpg"
        // imageRight="/assets/images/equine-apprenticeship-right.jpg"
      />
    </div>
  );
};

export default Programs;