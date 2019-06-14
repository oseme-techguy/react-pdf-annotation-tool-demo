/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button
} from "shards-react";
import CustomFileUpload from "../components-overview/CustomFileUpload";

const SidebarActions = ({ title }) => (
  <Card small className="mb-3">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">flag</i>
            <strong className="mr-1">Name:</strong> The Secret Life of Pi{" "}
          </span>
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">visibility</i>
            <strong className="mr-1">Extension:</strong>{" "}
            <strong className="text-success">.pdf</strong>{" "}
          </span>
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">calendar_today</i>
            <strong className="mr-1">Authour:</strong> Oseme Odigie{" "}
          </span>
          <span className="d-flex">
            <i className="material-icons mr-1">score</i>
            <strong className="mr-1">No of Pages:</strong>{" "}
            <strong className="text-warning">2</strong>
          </span>
        </ListGroupItem>
          <ListGroupItem>
        <CustomFileUpload />
        </ListGroupItem>
        <ListGroupItem className="d-flex px-3 border-0">
          <Button outline theme="accent" size="sm" className="ml-auto">
            <i className="material-icons">save</i> Upload PDF
          </Button>
        </ListGroupItem>
      </ListGroup>
    </CardBody>
  </Card>
);

SidebarActions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarActions.defaultProps = {
  title: "Actions"
};

export default SidebarActions;
