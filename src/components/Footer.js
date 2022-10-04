import Group12 from "../assets/Group12.svg";
import instagramIcon from "../assets/icons8-instagram.svg";
import facebookIcon from "../assets/icons8-facebook.svg";
import linkedinIcon from "../assets/icons8-linkedin (2).svg";
import twitterIcon from "../assets/twitter.svg";
import tiktokIcon from "../assets/icons8-tiktok (2).svg";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="columnOne">
        <div className="bottomLogoWrapper">
          <img src={Group12} alt="ratepunk logo" />
        </div>
        <div className="bottomParagraphWrapper">
          <p>
            Ratepunk compares hotel room prices across the major online travel
            agencies. When you search for a room, Ratepunk extension scans the
            top booking sites and runs a price comparison, so you can be
            confident in knowing you’re getting the best deal!
          </p><div className="watermarkWrapper">
        <span>© 2021 Seathustler. All Rights Reserved.</span>
      </div>
        </div>
      </div>
      <div className="menuWrapper">
        <div className="linkWrapper">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">Price Comparison</a>
            </li>
            <li>
              <a href="#">Chrome Extension</a>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Ratepunk Blog</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="columnTwo">
        <div className="contactWrapper">
          <h2>Contact</h2>
          <span>hi@ratepunk.com</span>
        </div>
        <div className="socialWrapper">
          <h2>Social</h2>
          <ul>
            <li>
              <a href="#">
                <img src={instagramIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={facebookIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={linkedinIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitterIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={tiktokIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
