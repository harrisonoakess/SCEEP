import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './About.css';

import LaurieBrimhall from '../assets/images/aboutPageProfiles/laurieBrimhall1.jpg';
import JayOhaco from '../assets/images/aboutPageProfiles/jayOhaco.jpg';
import LexiGardner from '../assets/images/aboutPageProfiles/lexiGardner1.jpg';
import SedonaForbis from '../assets/images/aboutPageProfiles/sedonaForbis.jpg';
import KyriWood from '../assets/images/aboutPageProfiles/kyriWood.png';
import ClaireHall from '../assets/images/aboutPageProfiles/claireHall.png';
import RayaWhipple from '../assets/images/aboutPageProfiles/rayaWhipple.jpg';
import LydiaBowman from '../assets/images/aboutPageProfiles/lydiaBowman.png';
import DelaneyMelluse from '../assets/images/aboutPageProfiles/delaneyMelluse.jpg';
import BethNielsen from '../assets/images/aboutPageProfiles/bethNielsen.png';
import Harley from '../assets/images/aboutPageProfiles/harley.jpg';
import Tuff from '../assets/images/aboutPageProfiles/tuff.jpg';
import Lady from '../assets/images/aboutPageProfiles/lady.jpg';
import Buddy from '../assets/images/aboutPageProfiles/buddy.jpg';
import Ally from '../assets/images/aboutPageProfiles/ally.jpg';
import Duke from '../assets/images/aboutPageProfiles/duke.jpg';
import Maverick from '../assets/images/aboutPageProfiles/maverick.jpg';

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [location]);

  const team = [
    {
      name: 'Laurie Brimhall',
      role: 'Founder/Instructor',
      bio: `Laurie is passionate about teaching young riders the joys of horsemanship. She founded the Silver Creek Equestrian Education Program to share her love of horses with the community. Laurie’s philosophy centers on building confident, capable riders through a well-rounded approach that includes riding skills and a strong foundation in horse care and equine knowledge. She believes horsemanship is about understanding and connecting with the horse, not just sitting in the saddle. 
      Laurie is a lifelong horsewoman with over 35 years of teaching experience, a former Pony Club District Commissioner, and a member of the Generation West Rodeo Drill Team. She teaches English and Western, focusing on confidence, fun, and a full understanding of horse care, not just riding. She started Horse Camp in 2011 and has had hundreds of participants. She is passionate about building a strong horse-rider partnership and creating a supportive environment where students learn, grow, and increase in confidence.
      A lifelong learner, she continually seeks new knowledge and techniques to enhance her teaching and equestrian knowledge, ensuring her students receive the best, most current horsemanship education available.`,
      photo: LaurieBrimhall,
    },
    {
      name: 'Jay Ohaco',
      role: 'Instructor/Homeschool Horse Class/Horse Camp/Group Lessons',
      bio: `Jay was born in England and raised in Santa Monica, California. For 10 years, she learned and worked for a British Horse Society riding instructor. She has many years of Eventing experience and has worked for several Grand Prix dressage riders. A difficult horse brought her to Ray Hunt, Buck Brannaman, and Bryan Neubert. She has ridden and taught full-time for over 30 years, has an eclectic, easy approach, and is teaching English and Western lessons. Jay and her husband, Jeff, moved to Snowflake a few years ago and love the people and families in this area! We are so happy to have her in our program!`,
      photo: JayOhaco,
    },
    {
      name: 'Lexi Gardner',
      role: 'Equine Apprentice/Instructor',
      bio: `Lexi is a horse crazy girl who is not afraid to get her hands dirty regarding horses. She grew up around horses and has been riding since she could walk. She started taking horses more seriously 3 years ago and became one of Laurie’s horse camp counselors, and took frequent lessons. Lexi has competed in various local horse shows, held a rodeo queen title for 2 years, and competed in the state 4H horse shows in both western and English, taking home many state champ buckles and ribbons and even qualifying for nationals. She loves the Western way of life and enjoys sharing it with others!`,
      photo: LexiGardner,
    },
    {
      name: 'Sedona Forbis',
      role: 'Horse Camp Barn Manager/Instructor',
      bio: `I'm a third-grade teacher at Highland Primary School, and I have found my forever place! I love the third-grade age group! 
      I have been riding horses since I was 3 years old and have shown and competed in both western and English disciplines. I managed and taught at a riding academy in Tucson, AZ, where I'm from. 
      My husband is the Agriculture teacher at Snowflake High School, so I am very involved with the FFA (Future Farmers of America). I coach the horse evaluation team, and this past year we were in the top 10 in the state! 
      I have three horses at home, Red, Kermit, and Lux. I love them and they are spoiled rotten. 
      I love working at this camp because it reminds me of when I was a kid, having so much fun at horse camp with all my friends! I want other kids to fall in love with horses the way I did when I was younger.`,
      photo: SedonaForbis,
    },
    {
      name: 'Kyri Wood',
      role: 'Horse Camp/Instructor',
      bio: `Kyri is a spunky and brave rider. She has competed in the Keg Race at the Snowflake Pioneer Days Rodeo multiple years and always ends up in the top 5. She breeds and raises livestock and has won over 20 buckles at livestock shows. She has also received a bronze in swine proficiency at state competitions. In addition, Kyri shows goats and steers and has won multiple buckles with them. Kyri has been an instructor at Horse Camp for the past five years, and we are excited to have her back again.`,
      photo: KyriWood,
    },
  ];

  // Dirt Road Riders Data
  const dirtRoadRiders = [
    {
      name: 'Claire Hall',
      role: 'Horse Camp Counselor/Day at the Farm/Saddle Club',
      bio: `Claire is a seventh-generation cowgirl with roots deep in the western way of life. Her love for horses started at just three years old. She loves training her horses and giving riding lessons. She rides and competes in both Western and English.
      One of her biggest accomplishments is winning an Arizona State Champion title on her horse Beauty. She is the current Arizona State Fair high point Champion in the Western junior division and is a Nationals qualifier.
      Claire has a fearless attitude and loves to rodeo. She competes in barrels, poles, roping, and goat tying. She is the current Navajo County Fair and Rodeo Teen Queen. In addition to her achievements in 4H and rodeo, Claire loves to play sports and is an honor roll student.
      She loves to learn as much as she can about horses and share that passion with others.`,
      photo: ClaireHall,
    },
    {
      name: 'Raya Whipple',
      role: 'Horse Camp Counselor/Day at the Farm/Saddle Club',
      bio: `Raya Bow Whipple was born and raised in Snowflake, AZ. She is 12 years old and in the 7th grade. She has been riding horses her whole life. This is her 5th year showing and competing with horses in the 4-H program. Raya has a deep love for animals with a true gift for training them. She has been working with Laurie and Jay for more than 2 years. She is a hard worker and a true friend to anyone. Her true love is horses, and enjoys spending every spare minute she has with them.`,
      photo: RayaWhipple,
    },
    {
      name: 'Lydia Bowman',
      role: 'Horse Camp Counselor',
      bio: `My name is Lydia Bowman, and I’m 17 years old. I love horses, and I’ve been riding and participating in horse 4-H since I was 11. I have 3 horses that I ride on the trails and in the arena. I also love dancing, music, piano, reading, and being outdoors.`,
      photo: LydiaBowman,
    },
    {
      name: 'Delaney Melluse',
      role: 'Horse Camp Counselor/Day at the Farm/Saddle Club',
      bio: `Delaney LOVES to ride and work with horses. She rides English and Western and is a member of the Compass 4-H club. She is dedicated to improving her horse knowledge and riding skills.`,
      photo: DelaneyMelluse,
    },
    {
      name: 'Beth Nielsen',
      role: 'Horse Camp Counselor',
      bio: `Beth loves camping, horses, and learning. She often goes camping with her friends through a program called Scouts, where she also gets opportunities to do service. She loves working with horses and finds any possible way to be around them!`,
      photo: BethNielsen,
    },
  ];

  // Horses Data
  const horses = [
    {
      name: 'Harley',
      role: 'Quarter Horse, 27 years old',
      bio: `Harley is a 27-year-old sorrel Quarter Horse with a heart as big as his legacy. For 11 unforgettable years, he was Laurie’s steadfast partner on the rodeo drill team, dazzling crowds with precision and grace. But Harley’s true calling has always been giving—he’s helped teach hundreds of kids to ride, offering confidence and calm with every step. Known for his gentle spirit and steady presence, Harley has earned a well-loved reputation as everyone’s favorite—the kind of horse who leaves a hoofprint on every heart he meets.`,
      photo: Harley,
    },
    {
      name: 'Tuff',
      role: 'Quarter Horse, 18 years old',
      bio: `Tuff is an 18-year-old bay Quarter Horse gelding whose name perfectly matches his talent and grit. Exceptionally versatile, Tuff has done it all—from rodeo drill team performances and speed events to roping and ranch work. But his true shine is in the show ring, where he’s racked up numerous awards across a wide range of disciplines. Whether it’s Western Pleasure, Trail, Reining, or jumping in English classes, Tuff brings elegance, athleticism, and heart to every ride. A true all-around horse, he’s as smart as he is stunning.`,
      photo: Tuff,
    },
    {
      name: 'Lady',
      role: 'Mare, 22 years old',
      bio: `Lady is a 22-year-old mare with a heart full of kindness and a spirit that calms everyone around her. Known for her sweet temperament and endless patience, Lady has been a trusted companion to countless children learning to ride. Gentle, steady, and always willing, she’s the kind of horse that makes riders feel safe and confident from the moment they meet her. Beloved by kids and adults alike, Lady is more than just a horse—she’s a quiet teacher and a cherished friend.`,
      photo: Lady,
    },
    {
      name: 'Buddy',
      role: 'Quarter Horse, 22 years old',
      bio: `Buddy is a stunning 22-year-old Quarter Horse with a wealth of experience and a touch of elegance. With fancy training and years of ranch work under his belt, he’s as reliable as he is refined. Buddy has a soft spot for treats, loves a good grooming session, and is happiest with people by his side. He’s a trail-lover at heart, confidently exploring the outdoors—but always with an eager eye toward heading home. Steady, smart, and full of charm, Buddy is the kind of horse who makes every ride feel like a good one.`,
      photo: Buddy,
    },
    {
      name: 'Ally',
      role: 'Quarter Horse, 11 years old',
      bio: `Ally is a beautiful 11-year-old black Quarter Horse mare with a big motor and a fast walk that makes her a standout on the ranch. Known for her speed and athleticism, she’s always ready to tackle any task. This will be her first season as a rodeo drill horse, and her natural flair and fancy movement are sure to shine in the arena. Though small in size, Ally has a big, affectionate personality and loves to be pampered and snuggled by kids. With her stunning looks, sweet nature, and powerhouse abilities, Ally is the perfect combination of grace and heart.`,
      photo: Ally,
    },
    {
      name: 'Duke',
      role: 'Roan Gelding, 18 years old',
      bio: `Duke is an 18-year-old roan gelding with a big engine and an even bigger heart. Nicknamed "Lightning McQueen" by the kids for his love of speed, Duke shines in everything from rodeo drill team performances to ranch work, jumping, and even carrying a rodeo queen with pride. Despite his go-go-go spirit, he has a soft spot for the tiniest riders—gently lowering his head for snuggles and soaking up every moment of grooming time. Versatile, affectionate, and full of personality, Duke is the perfect mix of power and sweetness.`,
      photo: Duke,
    },
    {
      name: 'Maverick',
      role: 'Thoroughbred, 12 years old',
      bio: `Maverick is a striking 12-year-old bay Thoroughbred standing tall at 16.1 hands. Once a racehorse, Maverick has gracefully transitioned into a well-rounded riding partner with a calm, steady canter and a love for jumping. Primarily ridden English, he’s a natural in the arena and a joy out on the trails. Maverick has a bold personality and loves attention, especially with treats from the kids. With his elegant build, athleticism, and confident charm, Maverick is as beautiful as he is versatile—a true example of heart and transformation.`,
      photo: Maverick,
    },
  ];

  return (
    <div className="about-page">
      {/* Team Section */}
      <section className="staff-section" id="meet-the-team">
        <h2>Meet Our Team</h2>
        <div className="staff-list">
          {team.map((member, index) => (
            <div key={index} className="staff-card">
              <img src={member.photo} alt={member.name} className="staff-photo" />
              <h3>{member.name}</h3>
              <p className="staff-role">{member.role}</p>
              <p className="staff-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dirt Road Riders Section */}
      <section className="dirt-road-riders-section">
        <h2>Meet the Dirt Road Riders</h2>
        <div className="staff-list">
          {dirtRoadRiders.map((rider, index) => (
            <div key={index} className="staff-card">
              <img src={rider.photo} alt={rider.name} className="staff-photo" />
              <h3>{rider.name}</h3>
              <p className="staff-role">{rider.role}</p>
              <p className="staff-bio">{rider.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Horses Section */}
      <section className="horses-section" id="meet-the-horses">
        <h2>Meet the Horses</h2>
        <div className="staff-list">
          {horses.map((horse, index) => (
            <div key={index} className="staff-card">
              <img src={horse.photo} alt={horse.name} className="staff-photo" />
              <h3>{horse.name}</h3>
              <p className="staff-role">{horse.role}</p>
              <p className="staff-bio">{horse.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
