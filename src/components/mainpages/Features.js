import React from "react";
import "./Features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faExchange,
  faWallet,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="feature-main">
      <div className="feature">
        <p>Top Features</p>
        <h2>Key Features of Swiftyex(Bot)</h2>
      </div>
      <div className="features-box">
        <div className="box2">
          <div className="icon">
            <FontAwesomeIcon
              icon={faExchange}
              style={{
                background: "#1F1548",
                borderRadius: "50%",
                border: "1px solid #2b1a6d",
                padding: "20px",
                color: "rgb(92, 62, 212)",
                fontSize: "30px",
              }}
            />
          </div>
          <h1>
            Unlimited <br />
            Transaction
          </h1>
          <p>
            Unlock the potential of unlimited <br />
            transactions, ensuring you have the <br />
            freedom to explore and execute <br />
            trades without constraints.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to="/started">
              <button>Get Started</button>
            </Link>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ color: "#583acf", marginTop: "15px" }}
            />
          </div>
        </div>

        <div className="box2">
          <div className="icon">
            <FontAwesomeIcon
              icon={faWallet}
              style={{
                background: "#1F1548",
                borderRadius: "50%",
                border: "1px solid #2b1a6d",
                padding: "20px",
                color: "rgb(92, 62, 212)",
                fontSize: "30px",
              }}
            />
          </div>
          <h1>
            StraightForward <br />
            Transaction
          </h1>
          <p>
            Unlock the potential of unlimited <br />
            transactions, ensuring you have the <br />
            freedom to explore and execute <br />
            trades without constraints.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to="/started">
              <button>Get Started</button>
            </Link>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ color: "#583acf", marginTop: "15px" }}
            />
          </div>
        </div>

        <div className="box2">
          <div className="icon">
            <FontAwesomeIcon
              icon={faPaperPlane}
              style={{
                background: "#1F1548",
                borderRadius: "50%",
                border: "1px solid #2b1a6d",
                padding: "20px",
                color: "rgb(92, 62, 212)",
                fontSize: "30px",
              }}
            />
          </div>
          <h1>
            Exchange <br />
            Messenger
          </h1>
          <p>
            Unlock the potential of unlimited <br />
            transactions, ensuring you have the <br />
            freedom to explore and execute <br />
            trades without constraints.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to="/started">
              <button>Get Started</button>
            </Link>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ color: "#583acf", marginTop: "15px" }}
            />
          </div>
        </div>
      </div>
      <div className="robotM">
        <div className="robot-text">
          <h2>
            Ready to elevate your <br />
            crypto trading <br /> experience?
          </h2>
          <p>
            Start your free trial now and unlock a world of unlimited
            transactions,
            <br />
            intelligent features, and seamless excahnge. Join us on the path to{" "}
            <br />
            smarter, more profitable trading. Let's make every trade count.
          </p>
          <Link to="/started">
            <button>Get Started</button>
          </Link>
        </div>
        <div className="robot">
          <img src="/images/robot.png" alt="" />
        </div>
      </div>

      <div className="another">
        <h2>
          Buy and Sell with the <br />
          lowest fees in the industry
        </h2>
        <p>
          Maximize your profits and minimize costs as you navigate the crypto.
          Join us and
          <br />
          take control of your trades with fees that won't weigh you down.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              border: "none",
              color: " #583acf",
              background: "transparent",
              cursor: "pointer",
              fontSize: "20px",
              marginTop: "15px",
            }}
          >
            Learn More
          </button>
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ color: "#583acf", marginTop: "17px" }}
          />
        </div>
        <div className="data">
          <img src="/images/table.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
