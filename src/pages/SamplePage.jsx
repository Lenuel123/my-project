import React from "react";
import { Row } from "reactstrap";
const SamplePage = () => {

  return (
        <div className="h-100">
          <Row>
            <Col xs='4' md='4' lg='4'/>
            <Col>
              hello world
            </Col>
            <Col xs='4' md='4' lg='4'/>
          </Row>
        </div>
  );
};

export default SamplePage;  