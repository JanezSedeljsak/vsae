import React, { useState } from "react";
import { MDBInput } from "mdbreact";

export default ({ change }) => {
  const [outputType, setOutputType] = useState(false);
  return (
    <>
      <MDBInput label="Vnesi izraz" />
    </>
  );
};
