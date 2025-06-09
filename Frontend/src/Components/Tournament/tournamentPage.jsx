import React from "react";
import { Link } from "react-router-dom";

const tournaments = [
  {
    title: "BGMI Beginner Series – June 2025",
    date: "June, 2025",
    description:
      "Gear up for an intense BGMI beginner showdown! 25 rising squads. Free entry. Pro-style scrims. Compete. Learn. Level up.",
  },
  {
    title: "HocxGaming Champions Cup – August 5, 2025",
    date: "August 5, 2025",
    description:
    "Battle for glory in the HocxGaming Champions Cup! Open for all BGMI players — register your squad now and compete to claim the title of champions. Free entry, pro-style scrims, and a chance to showcase your skills on the big stage.",
  },
  {
    title: "HocxGaming Legacy Cup – November 2025",
    date: "November 2025 ",
    description:
      "Step into the spotlight at the HocxGaming Legacy Cup – an exclusive tournament for rising BGMI stars to showcase their skills and carve their legacy.",
  },
];
function TournamentPage() {
  return (
    <div className="tournament-page mt-sm-5">
      <h2
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: "bold",
          marginBottom: "40px",
          letterSpacing: "2px",
        }}
      >
        Upcoming Tournaments
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {tournaments.map((tournament, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 300px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                }}
              >
                {tournament.title}
              </h3>
              <p style={{ color: "#777", marginBottom: "10px" }}>
                {tournament.date}
              </p>
              <p>{tournament.description}</p>
            </div>
            <Link
              to={
                index === 1 || index === 2
                  ? "#"
                  : "https://docs.google.com/forms/d/1DIdZBRvNw9CEtglT6UJN8cGU4flpgXQQKHbuXUNjOtU/edit?pli=1"
              }
              style={{
                marginTop: "20px",
                display: "block",
                textAlign: "center",
                padding: "10px 0",
                backgroundColor: "#1976d2",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "4px",
                fontWeight: "bold",
              }}
              onClick={(e) => {
                if (index === 1 || index === 2) {
                  e.preventDefault();
                  alert("Coming Soon");

                }
              }}
            >
            {index === 1 || index === 2 ? "Comming Soon" : "Register Now"}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TournamentPage;
