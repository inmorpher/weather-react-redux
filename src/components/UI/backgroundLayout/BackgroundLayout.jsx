import React from "react";

import globalStyles from "../../../Global.module.css";

const BackgroundLayout = () => {
  "sticky-frame bg-blur";
  return (
    <div
      className={`${globalStyles["sticky-frame"]} ${globalStyles["bg-blur"]}`}
    ></div>
  );
};

export default BackgroundLayout;
