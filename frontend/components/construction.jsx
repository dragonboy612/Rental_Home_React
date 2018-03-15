import React from "react";
import ghost from "../../app/assets/images/ghost.png";
import { Link } from "react-router-dom";

const Construction = () => (
  <div className="constructor">
    <div className="constructor-animation-box">
      <img className="constructor-image" src={ghost} />
    </div>

    <div className="constructor-text">
      <h1>Thanks for clicking that button!</h1>
      <p>This part of the site is currently under construction.</p>
      <p>
        Please do send suggestions/feedback to Tom at ThomasRStilwell@gmail.com
      </p>
      <p>
        Now, go <Link to="/homes">check out</Link> some creepy homes!
      </p>
    </div>
  </div>
);

export default Construction;
