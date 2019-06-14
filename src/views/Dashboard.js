/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      DocumentList: [
        {
          ref_id: "054862cbe3cf4fc5b1dc26a1410d522c",
          name: "mueller-report-searchable.pdf",
          user: {
            user_id: "0316158e03184878bdab201f6efa3e27",
            username: "BUSINESS",
            first_name: "Paul",
            last_name: "Alan",
            role: 0,
            ip_address: "127.0.0.1",
            last_login_time: "28 February 2019",
            created_at: "28 February 2019",
            last_modified_at: "28 February 2019"
          },
          authorAvatar: require("../images/avatars/1.jpg"),
          created_at: "28 February 2019",
          last_modified_at: "28 February 2019"
        },
        {
          ref_id: "054862cbe3cf4fc5b1dc26a1410d522c",
          name: "mueller-report-searchable.pdf",
          user: {
            user_id: "0316158e03184878bdab201f6efa3e27",
            username: "BUSINESS",
            first_name: "Paul",
            last_name: "Walker",
            role: 0,
            ip_address: "127.0.0.1",
            last_login_time: "28 February 2019",
            created_at: "28 February 2019",
            last_modified_at: "28 February 2019"
          },
          authorAvatar: require("../images/avatars/1.jpg"),
          created_at: "28 February 2019",
          last_modified_at: "28 February 2019"
        },
        {
          ref_id: "054862cbe3cf4fc5b1dc26a1410d522c",
          name: "mueller-report-searchable.pdf",
          user: {
            user_id: "0316158e03184878bdab201f6efa3e27",
            username: "BUSINESS",
            first_name: "Bill",
            last_name: "Gates",
            role: 0,
            ip_address: "127.0.0.1",
            last_login_time: "28 February 2019",
            created_at: "28 February 2019",
            last_modified_at: "28 February 2019"
          },
          authorAvatar: require("../images/avatars/1.jpg"),
          created_at: "28 February 2019",
          last_modified_at: "28 February 2019"
        },
        {
          ref_id: "054862cbe3cf4fc5b1dc26a1410d522c",
          name: "mueller-report-searchable.pdf",
          user: {
            user_id: "0316158e03184878bdab201f6efa3e27",
            username: "BUSINESS",
            first_name: "Larry",
            last_name: "Page",
            role: 0,
            ip_address: "127.0.0.1",
            last_login_time: "28 February 2019",
            created_at: "28 February 2019",
            last_modified_at: "28 February 2019"
          },
          authorAvatar: require("../images/avatars/1.jpg"),
          created_at: "28 February 2019",
          last_modified_at: "28 February 2019"
        },
        {
          ref_id: "054862cbe3cf4fc5b1dc26a1410d522c",
          name: "mueller-report-searchable.pdf",
          user: {
            user_id: "0316158e03184878bdab201f6efa3e27",
            username: "BUSINESS",
            first_name: "John",
            last_name: "Doe",
            role: 0,
            ip_address: "127.0.0.1",
            last_login_time: "28 February 2019",
            created_at: "28 February 2019",
            last_modified_at: "28 February 2019"
          },
          authorAvatar: require("../images/avatars/1.jpg"),
          created_at: "28 February 2019",
          last_modified_at: "28 February 2019"
        },
        {
          ref_id: "054862cbe3cf4fc5b1dc26a1410d522c",
          name: "mueller-report-searchable.pdf",
          user: {
            user_id: "0316158e03184878bdab201f6efa3e27",
            username: "BUSINESS",
            first_name: "Jane",
            last_name: "Smith",
            role: 0,
            ip_address: "127.0.0.1",
            last_login_time: "28 February 2019",
            created_at: "28 February 2019",
            last_modified_at: "28 February 2019"
          },
          authorAvatar: require("../images/avatars/1.jpg"),
          created_at: "28 February 2019",
          last_modified_at: "28 February 2019"
        },
      ],
    };
  }

  render() {
    const { DocumentList } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Dashboard" subtitle="Uploaded Documents" className="text-sm-left" />
        </Row>

        {/* Document List */}
        <Row>
          {DocumentList.map((document, idx) => (
            <Col lg="4" key={idx}>
              <Card small className="card-post mb-4">
                <CardBody>
                  <h5 className="card-title">{document.name}</h5>
                  <p className="card-text text-muted">
                    Ref_ID: {document.ref_id}
                  </p>
                </CardBody>
                <CardFooter className="border-top d-flex">
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${document.authorAvatar}')` }}
                    >
                      Written by James Khan
                    </a>
                    <div className="d-flex flex-column justify-content-center ml-3">
                      <span className="card-post__author-name">
                        {document.user.first_name}{" "}{document.user.last_name}
                      </span>
                      <small className="text-muted">{document.created_at}</small>
                    </div>
                  </div>
                  <div className="my-auto ml-auto">
                    <Button size="sm" theme="white">
                      <i className="far fa-bookmark mr-1" /> Annotate Document
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
