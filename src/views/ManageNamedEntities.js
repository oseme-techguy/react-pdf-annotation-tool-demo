import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button,
  Container,
  Row, Col
} from "shards-react";

import PageTitle from "../components/common/PageTitle";



class ManageNamedEntities extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      EntityList: [
        {
          entity_id: "0316158e03184878bdab201f6efa3e27",
          value: "BUSINESS",
          description: "This is the business Entity",
          shoud_use: true,
          created_at: "28 February 2019",
          last_modified_at: "28 February 2019"
        },
        {
          entity_id: "054862cbe3cf4fc5b1dc26a1410d522c",
          value: "SPORT",
          description: "This is the business Entity",
          shoud_use: true,
          created_at: "28 February 2019",
          last_modified_at: "28 February 2019"
        },
        {
          entity_id: "0316158e03184878bdab201f6efa3e27",
          value: "LOCATION",
          description: "This is the business Entity",
          shoud_use: true,
          created_at: "28 February 2019",
          last_modified_at: "28 February 2019"
        },
        {
          entity_id: "0316158e03184878bdab201f6efa3e27",
          value: "MONEY",
          description: "This is the business Entity",
          shoud_use: false,
          created_at: "28 February 2019",
          last_modified_at: "28 February 2019"
        },
        {
          entity_id: "0316158e03184878bdab201f6efa3e27",
          value: "BOOKS",
          description: "This is the business Entity",
          shoud_use: true,
          created_at: "28 February 2019",
          last_modified_at: "28 February 2019"
        },
        {
          entity_id: "0316158e03184878bdab201f6efa3e27",
          value: "FOOD",
          description: "This is the business Entity",
          shoud_use: false,
          created_at: "28 February 2019",
          last_modified_at: "28 February 2019"
        },
        
      ]
    };
  }

  render() {
    const { EntityList } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Manage Spacy Named Entities" subtitle="Entity List" className="text-sm-left" />
        </Row>

        {/* Default Light Table */}
        <Row>
          <Col lg="9" md="12">
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Avialable Entities</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        #
                      </th>
                      <th scope="col" className="border-0">
                        Entity ID
                      </th>
                      <th scope="col" className="border-0">
                        Entity Name
                      </th>
                      <th scope="col" className="border-0">
                        Description
                      </th>
                      <th scope="col" className="border-0">
                        is Active ?
                      </th>
                      <th scope="col" className="border-0">
                        Created At
                      </th>
                      <th scope="col" className="border-0">
                        Last Modified
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {EntityList.map((post, idx) => (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>{post.entity_id}</td>
                      <td>{post.value}</td>
                      <td>{post.description}</td>
                      <td>{post.shoud_use ? "true" : "false"}</td>
                      <td>{post.created_at}</td>
                      <td>{post.last_modified_at}</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>

          {/* Sidebar Widgets */}
          <Col lg="3" md="12">
            <Card small className="mb-3">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Add Named Entity</h6>
              </CardHeader>

              <CardBody className="p-0">
                <ListGroup flush>
                  <ListGroupItem className="p-3">
                    <Row>
                      <Col>
                        <Form>
                          <FormGroup>
                            <label htmlFor="name">Name</label>
                            <FormInput id="name" placeholder="Enter the name of the Entity" />
                          </FormGroup>

                          <FormGroup>
                            <label htmlFor="description">Description</label>
                            <FormInput
                              id="description"
                              placeholder="Enter Entity Description"
                            />
                          </FormGroup>

                          <FormGroup>
                            <FormCheckbox>
                                {/* eslint-disable-next-line */}Activate this entity {" "}
                              </FormCheckbox>
                          </FormGroup>
                          <ListGroupItem className="d-flex px-3 border-0">
                            <Button outline theme="accent" className="ml-auto">
                              <i className="material-icons">add</i> Add
                            </Button>
                          </ListGroupItem>
                        </Form>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        
        </Row>

      </Container>
    );
  }
}

export default ManageNamedEntities;
