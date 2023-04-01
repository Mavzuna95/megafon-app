import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Player
        autoplay
        className=""
        loop
        src="https://assets8.lottiefiles.com/packages/lf20_fmieo0wt.json"
        style={{ height: "400px", width: "400px" }}
      ></Player>
      <Link to="/" className="text-sm font-medium flex justify-center">
        Перейти в гавную страницу
      </Link>
    </div>
  );
};

export default NotFound;
