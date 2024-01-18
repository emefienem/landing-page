import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="this-bg">
      <div className="robotM">
        <div className="robot-text">
          <h2>
            Be among the first to
            <br />
            experience Swifty App
          </h2>
          <p>
            Click the button to join the waitlist and chat with swifty on
            <br />
            Telegram. Enjoy early access, exclusive perks and front-
            <br />
            row seats to the future of trading.
          </p>
          <button>Get Started</button>
        </div>
        <div className="robot2">
          <img src="/images/ad.png" alt="" />
        </div>
      </div>

      <div className="footer">
        <div className="first">
          <p>
            Swiftyex Box is your trusted partner in the world of currency <br />
            trading, we redefine the way you exchange money, making <br />
            it is simple as chatting with a seasoned trader. <br /> <br />
            Sign up to get the latest in Swifty news, discounts, <br />
            and more.
          </p>
          <div className="input">
            <input type="email" placeholder="Email Address" />
            <FontAwesomeIcon icon={faArrowRight} className="arrow" />
          </div>
        </div>

        <div className="second">
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Rates</li>
            <li>Telegram</li>
          </ul>
        </div>

        <div className="third">
          <ul>
            <li>Privacy Policy and Terms of Service</li>
            <li>Swiftyex(Bot) Privacy Policy</li>
          </ul>
          <div className="robot-footer">
            <img src="/images/Frame.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
