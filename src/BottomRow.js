import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {

  const [currentHalf, setCurrentHalf] = useState(1)

  return (
    <div className="bottomRow">

      <div className="currentHalf">
        <h3 className="currentHalf__title">Half</h3>
        <div className="currentHalf__value">{currentHalf}</div>
      </div>

        
    </div>
  );
};

export default BottomRow;
