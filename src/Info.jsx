import React from "react";
import { withScrollDetect } from "./withScrollDetect";

const RawInfo = ({ scrolled }) => {
  return scrolled ? (
    <div className="info">
      <h1>😃</h1>

    </div>
  ) : (
    <div className="info">
      <h1>☹️</h1>
    </div>
  );
};

export const Info = withScrollDetect(RawInfo);
