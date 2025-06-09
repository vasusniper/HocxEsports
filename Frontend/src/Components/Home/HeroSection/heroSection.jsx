import React from "react";
import Profile from "../../Profile/profile";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="bg-dark col-12 text-white text-center d-flex flex-column justify-content-center align-items-center"
            style={{
              height: "100vh",
              backgroundImage: "url(/bgmi-hero.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="display-4 fw-bold mb-3">
              Join the Battle. Rule the Arena.
            </h1>
            <p className="lead mb-4">
              HocxGaming organizes top-tier BGMI tournaments and live streams to
              bring out the best in gamers.
            </p>
            <div>
              <Link to="/tournaments" className="btn btn-warning btn-lg me-3">
                Join Tournament
              </Link>
              <a
                href="https://www.youtube.com/@Hocxesports"
                target="main"
                className="btn button btn-outline-light btn-lg"
              >
                Watch Live
              </a>
            </div>
          </div>
        </div>
        <Profile/>
      </div>
    </>
  );
}

export default HeroSection;
