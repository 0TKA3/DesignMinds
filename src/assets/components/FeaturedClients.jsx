import React from "react";
import spotifyLogo from "../logos/Spotify.png";
import OffWhiteLogo from "../logos/OffWhite.png";
import LilleLogo from "../logos/Lille.png";
import SkyStudiosLogo from "../logos/SkyStudios.png";

export default function FeaturedClients() {
  return (
    <div className="featured-clients">
      <h1>FEATURED CLIENTS</h1>
      <div className="featured-clients-cards">
        <div className="featured-clients-card">
          <img src={spotifyLogo} alt="#" className="logo" />
          <h3>
            Spotify reached out to us to create a new design
            <br />
            system and conduct an overhaul of the brand’s digital
            <br />
            experience. The objective was to provide customers
            <br />
            with seamless purchasing journeys and we did this by
            <br />
            combining robust user experience with strong and
            <br />
            engaging content.
          </h3>
          <a href="#" className="view-case-btn">
            VIEW CASE STUDY
          </a>
        </div>
        <div className="featured-clients-card">
          <img src={OffWhiteLogo} alt="#" className="logo" />
          <h3>
            We were brought in to refresh their primary digital properties with
            a particular focus on building a robust eCommerce capability that
            re-imaged the way consumers purchase tyres, wheels and batteries
            online. We achieved this by crafting an informative and intuitive
            purchasing experience, backed by comprehensive usability research
            and validation.
          </h3>
          <a href="#" className="view-case-btn">
            VIEW CASE STUDY
          </a>
        </div>
        <div className="featured-clients-card">
          <img src={SkyStudiosLogo} alt="#" className="logo" />
          <h3>
            In collaboration with sky’s development partner +OneX, we created a
            ”best-in-class” eCommerce experience underpinned and validated by an
            in- depth research study that focussed on incorporating the best
            possible UX principles and analyses.
          </h3>
          <a href="#" className="view-case-btn">
            VIEW CASE STUDY
          </a>
        </div>
        <div className="featured-clients-card">
          <img src={LilleLogo} alt="#" className="logo" />
          <h3>
            In collaboration with Promise Brand Specialists, we were tasked to
            create an elevated digital experience to reflect the innovative and
            performance-oriented nature of the brand. The primary goal of the
            website was to provide a seamless digital service when looking for
            key information as well as placing and paying for cement orders
            online.
          </h3>
          <a href="#" className="view-case-btn">
            VIEW CASE STUDY
          </a>
        </div>
      </div>
    </div>
  );
}
