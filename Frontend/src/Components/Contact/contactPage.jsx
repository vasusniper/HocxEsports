import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./contactPage.css";
function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // form reload se bachega
    alert("Message sent successfully!");
  
    // Optionally: form reset karne ke liye
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  

  return (
    <div className="contact-page" style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Contact Us
      </h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
        {/* Contact Form */}
        <div style={{ flex: "1 1 400px", maxWidth: "500px" }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="name" style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "5px" }}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="email" style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "5px" }}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="message" style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "5px" }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                width: "fit-content",
                padding: "12px",
                backgroundColor: "#1976d2",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: "bold",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                margin: "0 auto",
                display: "block",
                transition: "background-color 0.3s",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div style={{ flex: "1 1 400px", maxWidth: "500px" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "center" }}>Our Location</h3>
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%", /* 16:9 aspect ratio */
              height: "0",
              overflow: "hidden",
              marginBottom: "20px",
            }}
          >
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5612097448036!2d77.6004975!3d12.9342536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16734f9793c1%3A0x3a18e4b1d5786970!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1626265987819!5m2!1sen!2sus"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <p style={{ textAlign: "center", color: "#777" }}>
            Visit us at our office or reach out for more details.
          </p>
        </div>
      </div>

      {/* Additional Contact Details */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontSize: "1.1rem",
        }}
      >
        <p style={{ marginBottom: "10px" }}>
          <strong>Email:</strong> contact@hocxgaming.com
        </p>
        <p>
          <strong>Phone:</strong> +91 1205274906
        </p>
      </div>

      <Link
        to="/"
        style={{
          width: "fit-content",
          display: "block",
          margin: "30px auto",
          textAlign: "center",
          padding: "10px 20px",
          backgroundColor: "#1976d2",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          fontWeight: "bold",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}

export default ContactPage;
