import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";  

const ContactSection = () => {
  const [position, setPosition] = useState([31.470849,74.3297783,16.58]);

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

  const position_2 = [31.470849,74.3297783,16.58];

  // Custom Red Icon
  const redIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

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
              <Marker position={position_2} icon={redIcon}>
                <Popup>📍 لاہور، پاکستان</Popup>
              </Marker>
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
