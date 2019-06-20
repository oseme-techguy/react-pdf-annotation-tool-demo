import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
import MainFooter from "../components/layout/MainFooter";

const FullWidthLayout = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
    <Row>
      <Col className="main-content p-0" sm="12" tag="main">
        {children}
        <MainFooter />
      </Col>
    </Row>
  </Container>
);

FullWidthLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

FullWidthLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default FullWidthLayout;
