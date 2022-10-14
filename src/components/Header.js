import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <Navigation />
      <Form history={history} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Header;
