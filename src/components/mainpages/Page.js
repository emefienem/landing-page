import React from "react";
import "./Page.css";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <>
      <div className="container">
        <div className="some-text">
          <h2>
            Step into the future of crypto trading with <br />
            <span>Swifteyex(Bot).</span>
          </h2>
          <p>
            Meet <span style={{ color: "#583acf" }}>Swifty</span>, your
            human-like companion, making every interaction as smooth as a chat
            trader. Intelligence meets simplicity in our fascinating app, even
            allowing seamless bill br payments.
          </p>
          <Link to="/started">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
