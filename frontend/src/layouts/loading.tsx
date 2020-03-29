
import React from "react";

export default () => {
  return (
    <div className='fixed-layout'>
        <div className="spinner-container">
            {Array(16).fill(<div className="block"></div>)}
        </div>
    </div>
  );
}