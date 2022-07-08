import React from "react";
import { Container, Arrow } from "./GoBackButton";

const GoBackButton = () => {
  return (
    <Container className="link" to="/">
      <Arrow first />
      <Arrow />
    </Container>
  );
};

export default GoBackButton;
