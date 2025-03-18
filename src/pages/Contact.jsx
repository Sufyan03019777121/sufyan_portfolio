import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactSection = () => {
  const [position, setPosition] = useState([31.4832, 74.3587]); // Walton, Farooq Colony, Lahore

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        () => console.warn("Location access denied! Using default location.")
      );
    }
  }, []);

  return (
    <section id="contact" className="text-center ">
      <div className="container">
        <div className="row justify-content-center">
          <h2 className="fw-bold">Contact</h2>
          <p className="lead text-muted mb-5">
            Do you need a
            <span style={{ color: "blue" }}> react UI developer</span>
            ? I would love to hear from you.
          </p>
        </div>
      </div>

      <div className="container m">
        <div className="row">
          {/* Map Section */}
          <div className="col-md-6 pb-5  ">
            <MapContainer center={position} zoom={13} style={{ height: "300px", width: "100%" }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            </MapContainer>
          </div>

          {/* Contact Details Section */}
          <div className="col-md-6  mb-5 border border-success">
            <div className="mb-5">
              <h6 className="text-uppercase text-primary mb-2 pt-3">Address</h6>
              <p className="lead ">Lahore, Model town, Q Block</p>
            </div>
            <div className="mb-3">
              <h6 className="text-uppercase mb-3">Phone</h6>
              <p className="lead mb-0 text-success ">
                03019777121
              </p>
            </div>
            <div className="">
              <h6 className="text-uppercase mb-2">Email</h6>
              <p className="lead mb-0">
                <span style={{ color: "purple", marginLeft: "10px" }}>sufyanpakpattan@gmail.com</span>

              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default ContactSection;
