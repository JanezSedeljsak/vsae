
import React from "react";

export default () => {
  return (
    <div className='fixed-layout'>
        <div className="spinner-container">
            {Array.from(Array(16), (_: undefined, i: number) => <div key={i} className="block"></div>)}
        </div>
    </div>
  );
}