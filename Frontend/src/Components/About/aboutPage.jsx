import React from "react";
import { Link } from "react-router-dom";
import "./aboutPage.css";
import TeamSection from "../miscellaneous/teamSection";
function AboutPage() {
  return (
    <div className="container">
      <div className=" row about-page">
        <h2 className="about-title mt-4">About HocxGaming</h2>
        <hr />

        <div className="about-content">
          <p className="">
            HocxGaming is a community-driven esports organization dedicated to
            bringing the most exciting and competitive BGMI (Battlegrounds
            Mobile India) tournaments to the gaming world. We nurture new talent
            and provide a platform for beginners to showcase their skills.
          </p>

          <p>
            Our goal is to create an inclusive environment where players of all
            levels can compete, learn, and grow. Whether you're a beginner or a
            pro, HocxGaming helps take your skills to the next level.
          </p>

          <p>
            From beginner series to professional tournaments, we provide fair
            and fun opportunities with thrilling gameplay and rewards for the
            best teams.
          </p>

          <h3 className="section-heading">Our Vision</h3>
          <hr />
          <p>
            We aim to become a leading esports platform for BGMI players,
            offering opportunities for growth, skill development, and
            recognition in a passionate gaming community.
          </p>
          <TeamSection />
          <h3 className="section-heading mt-4">Join Us</h3>
          <hr />
          <p>
            Ready to take your gaming career to the next level? Join our
            community, participate in our tournaments, and become part of the
            HocxGaming family.
          </p>
          <Link to="/contact" className="contact-button">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./aboutPage.css";

// function AboutPage() {
//   return (
//     <div className="about-page">
//       <h2 className="about-title">
//       About HocxGaming
//       </h2>

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "20px",
//           textAlign: "center",
//           maxWidth: "900px",
//           margin: "0 auto",
//         }}
//       >
//         <p>
//           HocxGaming is a community-driven esports organization dedicated to bringing the most
//           exciting and competitive BGMI (Battlegrounds Mobile India) tournaments to the gaming world.
//           We believe in nurturing new talent, providing a platform for beginners to showcase their skills, and
//           organizing tournaments that bring players together from all around the country.
//         </p>

//         <p>
//           Our goal is to create an inclusive environment where players of all levels can compete, learn, and
//           grow in the world of esports. Whether you're just starting your journey or you're a seasoned pro, HocxGaming
//           is here to help you take your skills to the next level.
//         </p>

//         <p>
//           From beginner series to professional tournaments, HocxGaming organizes events that provide opportunities
//           for players to compete in a fair and fun environment. We strive to make every tournament memorable, with
//           thrilling gameplay, exciting matches, and rewards for the best teams.
//         </p>

//         <h3
//           style={{
//             fontSize: "1.5rem",
//             fontWeight: "bold",
//             marginTop: "40px",
//             textTransform: "uppercase",
//           }}
//         >
//           Our Vision
//         </h3>

//         <p>
//           HocxGaming envisions becoming a leading esports platform for BGMI players, offering opportunities for growth,
//           skill development, and recognition. We are committed to building a community of passionate gamers and creating
//           a space where esports can thrive.
//         </p>

//         <h3
//           style={{
//             fontSize: "1.5rem",
//             fontWeight: "bold",
//             marginTop: "40px",
//             textTransform: "uppercase",
//           }}
//         >
//           Join Us
//         </h3>

//         <p>
//           Are you ready to take your gaming career to the next level? Join our community today, participate in our tournaments,
//           and become part of the HocxGaming family. Stay connected through our website and social media to never miss an update!
//         </p>

//         <Link
//           to="/contact"
//           style={{
//             display: "inline-block",
//             marginTop: "20px",
//             padding: "10px 20px",
//             backgroundColor: "#1976d2",
//             color: "#fff",
//             textDecoration: "none",
//             borderRadius: "5px",
//             fontWeight: "bold",
//             textAlign: "center",
//           }}
//         >
//           Contact Us
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default AboutPage;
