import React from "react";
import "./homePage.css";
// Import components
import HeroSection from "./HeroSection/heroSection";
import YouTubeEmbed from "./YoutubeEmbed/youtubeEmbed";
import Tournament from "../Tournament/tournamentPage";
import TeamSection from "../miscellaneous/teamSection";


export default function HomePage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <HeroSection />
          <Tournament/>
          <YouTubeEmbed />
          <TeamSection/>
          
        </div>
      </div>
    </>
  );
}
