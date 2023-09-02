import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollBtnHandler = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className=" footer_container flex-space-between page-containerWidth padding-tp-btm-xl">
        <p className="footer-logo-text">Shippr</p>
        <p className="footer_copyright-text flex-column gap-xs flex-center">
          <span> &copy; No Copyright,</span>
          <span>Ashok Patel</span>
        </p>

        <ul className="footer_socials flex-center gap-xl">
          <li>
            <Link class="link" to="https://twitter.com/ashokpatel574">
              <TwitterIcon />
            </Link>
          </li>
          <li>
            <Link class="link" to="https://www.linkedin.com/in/ashokpatel574/">
              <LinkedInIcon />
            </Link>
          </li>
          <li>
            <Link class="link" to="https://github.com/ashokpatel574">
              <GitHubIcon />
            </Link>
          </li>
          <li className="btn_pageUp-wrap" onClick={scrollBtnHandler}>
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
