import React from "react";
import { ScrollDetect } from "./ScrollDetect";

const RawInfo = ({ scrolled }) => {
  return scrolled ? (
    <div className="info">
      <h1>đ</h1>

    </div>
  ) : (
    <div className="info">
      <h1>âšī¸</h1>
    </div>
  );
};

export const Info = ScrollDetect(RawInfo);
