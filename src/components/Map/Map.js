import React, { useRef, useState } from "react";
import { WorldMap } from "react-svg-worldmap";

import data from "./data.json";

const MapShow = () => {
  const [isShowen, setShown] = useState(false);
  const { MapData } = data;

  const clickAction = (e, countryCode) => {
    const data = MapData.filter((el) => el.name === countryCode);
    const currObj = { ...data[0] };
    currObj.disabled = true;
    setShown(true);
  };
  return (
    <div>
      <WorldMap
        color="red"
        title="Top Countries"
        value-suffix="points"
        size="lg"
        data={MapData}
        onClickFunction={clickAction}
      />
      {isShowen ? (
        <div className="container">
  
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MapShow;
