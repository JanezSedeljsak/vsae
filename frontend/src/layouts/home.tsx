import React, { useState } from "react";
import { MDBInput } from "mdbreact";

type HomeProps = {
    change: any
}

export default ({ change }: HomeProps) => {
  const [outputType, setOutputType] = useState(false);
  return (
    <>
      <MDBInput label="Vnesi izraz" />
    </>
  );
};
