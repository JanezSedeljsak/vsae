import React, { useState } from "react";
import { MDBSelect, MDBInput } from "mdbreact";

export default () => {
  const [outputType, setOutputType] = useState(false);
  return (
    <>
      <MDBInput label="Vnesi izraz" />
    </>
  );
};
