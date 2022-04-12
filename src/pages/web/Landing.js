import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../web/elements/Navigation";
import Banner from "./elements/Banner";
import MidBanner from "./elements/MidBanner";
import "../../styles/Landing.css";
import Features from "./elements/Features";
import Ready from "./elements/Ready";
import GetUpdates from "./elements/GetUpdates";
function Landing() {
  return (
    <div className="w-100 h-100 pb-5 pt-5">
      <Container>
        <Navigation />
        <Banner />
        <MidBanner />
        <Features />
      </Container>
      <Ready />
      <GetUpdates />
    </div>
  );
}

export default Landing;
