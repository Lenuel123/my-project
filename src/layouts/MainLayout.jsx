import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
// import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired, // Define expected prop type
};

export default MainLayout;
