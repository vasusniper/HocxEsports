import React from "react";
import MoreTextBtn from "./moreTextBtn";
import Sachin from "../../assets/Sachin.jpg"
import Vasusniper from "../../assets/Vasu-Sniper.png"
import "../About/aboutPage.css";
import Yas from "../../assets/Yas.jpg"
const TeamSection = () => {
  return (
    <div className="container">
      <div className="row">
        <h3 className="section-heading text-center mb-5 mt-3">Meet the Team</h3>
        <hr />
        <div className="row team-section">
          <div className="col-12 team-member">
            <img src={Sachin} alt="CEO" />
            <h4>Alex Tr</h4>
            <MoreTextBtn
              Position="CEO & Founder"
              About="Alex is the visionary behind HocxGaming, leading the team with strategic direction and dedication. With a passion for gaming, he ensures innovation in every tournament. Connect with us"
            />
          </div>

          <div className="col-12 team-member">
            <img src={Vasusniper} alt="Co-Founder" />
            <h4>Vasu Sniper</h4>
            <MoreTextBtn
              Position="Co-Founder"
              About="Vasu Sniper is the Co-founder of HocxGaming. He leads the entire team with strong leadership, manages operations, and ensures that every tournament and activity runs smoothly with full dedication and passion for gaming."
            />
          </div>

          <div className="col-12 team-member">
          <img src={Yas} alt="Tournament-Manager" />

            <h4>Yas Sniper</h4>
            <MoreTextBtn
              Position="Tourn. Manager"
              About="Yas Sniper oversees all tournaments at HocxGaming, ensuring every match runs smoothly. His keen eye for detail keeps the gameplay fair and exciting."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
