import React from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="flex-space-between">
        <p>Shippr</p>
        <p>&copy; No Copyright, Feel free to replicate. by Ashok</p>

        <ul className="footer_socials flex-center">
          <li>
            <TwitterIcon />
          </li>
          <li>
            <LinkedInIcon />
          </li>
          <li>
            <GitHubIcon />
          </li>
          <li className="btn_pageUp-wrap">
            <span className="btn_pageUp flex-center">
              <ArrowUpwardIcon />
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
