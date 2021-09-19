import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

import { Container } from "./styles";

export function Loader() {
  return (
    <Container>
      <ScaleLoader color="#36D73F" loading={true} />
    </Container>
  );
}
