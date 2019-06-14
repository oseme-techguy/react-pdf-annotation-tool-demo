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



class ManageUsers extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      UserList: [
        {
          user_id: "0316158e03184878bdab201f6efa3e27",
          username: "BUSINESS",
          first_name: "This is the business Entity",
          last_name: "This is the business Entity",
          role: 0,
          ip_address: "127.0.0.1",
          last_login_time: "28 February 2019",
          created_at: "28 February 2019",
          last_modified_at: "28 February 2019"
        },
        {
          user_id: "054862cbe3cf4fc5b1dc26a1410d522c",
          username: "BUSINESS",
          first_name: "This is the business Entity",
          last_name: "This is the business Entity",
          role: 0,
          ip_address: "127.0.0.1",
          last_login_time: "28 February 2019",
          created_at: "28 February 2019",
          last_modified_at: "28 February 2019"
        },
        {
          user_id: "0316158e03184878bdab201f6efa3e27",
          username: "BUSINESS",
          first_name: "This is the business Entity",
          last_name: "This is the business Entity",
          role: 0,
          ip_address: "127.0.0.1",
          last_login_time: "28 February 2019",
          created_at: "28 February 2019",
          last_modified_at: "28 February 2019"
        },
        {
          user_id: "054862cbe3cf4fc5b1dc26a1410d522c",
          username: "BUSINESS",
          first_name: "This is the business Entity",
          last_name: "This is the business Entity",
          role: 0,
          ip_address: "127.0.0.1",
          last_login_time: "28 February 2019",
          created_at: "28 February 2019",
          last_modified_at: "28 February 2019"
        },
        {
          user_id: "0316158e03184878bdab201f6efa3e27",
          username: "BUSINESS",
          first_name: "This is the business Entity",
          last_name: "This is the business Entity",
          role: 0,
          ip_address: "127.0.0.1",
          last_login_time: "28 February 2019",
          created_at: "28 February 2019",
          last_modified_at: "28 February 2019"
        },

      ]
    };
  }

  render() {
    const { UserList } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Manage Users" subtitle="Users List" className="text-sm-left" />
        </Row>

        {/* Default Light Table */}
        <Row>
          <Col lg="12" md="12">
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Avialable Users</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        #
                      </th>
                      <th scope="col" className="border-0">
                        User ID
                      </th>
                      <th scope="col" className="border-0">
                        Username
                      </th>
                      <th scope="col" className="border-0">
                        First Name
                      </th>
                      <th scope="col" className="border-0">
                        Last Name
                      </th>
                      <th scope="col" className="border-0">
                        Role
                      </th>
                      <th scope="col" className="border-0">
                        IP Address
                      </th>
                      <th scope="col" className="border-0">
                        Last Logged In
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
                  {UserList.map((user, idx) => (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>{user.user_id}</td>
                      <td>{user.username}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{parseInt(user.role, 10) == 1 ? "Manager" : "Analyst" }</td>
                      <td>{user.ip_address}</td>
                      <td>{user.last_login_time}</td>
                      <td>{user.created_at}</td>
                      <td>{user.last_modified_at}</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>

          {/* Sidebar Widgets */}
          <Col lg="3" md="12" style={{display:'none'}}>
            <Card small className="mb-3">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Add User</h6>
              </CardHeader>

              <CardBody className="p-0">
                <ListGroup flush>
                  <ListGroupItem className="p-3">
                    <Row>
                      <Col>
                        <Form>
                          <Row form>
                            <Col md="6" className="form-group">
                              <label htmlFor="feEmailAddress">Email</label>
                              <FormInput
                                id="feEmailAddress"
                                type="email"
                                placeholder="Email"
                              />
                            </Col>
                            <Col md="6">
                              <label htmlFor="fePassword">Password</label>
                              <FormInput
                                id="fePassword"
                                type="password"
                                placeholder="Password"
                              />
                            </Col>
                          </Row>

                          <FormGroup>
                            <label htmlFor="feInputAddress">Address</label>
                            <FormInput id="feInputAddress" placeholder="1234 Main St" />
                          </FormGroup>

                          <FormGroup>
                            <label htmlFor="feInputAddress2">Address 2</label>
                            <FormInput
                              id="feInputAddress2"
                              placeholder="Apartment, Studio or Floor"
                            />
                          </FormGroup>

                          <Row form>
                            <Col md="6" className="form-group">
                              <label htmlFor="feInputCity">City</label>
                              <FormInput id="feInputCity" />
                            </Col>
                            <Col md="4" className="form-group">
                              <label htmlFor="feInputState">State</label>
                              <FormSelect id="feInputState">
                                <option>Choose...</option>
                                <option>...</option>
                              </FormSelect>
                            </Col>
                            <Col md="2" className="form-group">
                              <label htmlFor="feInputZip">Zip</label>
                              <FormInput id="feInputZip" />
                            </Col>
                            <Col md="12" className="form-group">
                              <FormCheckbox>
                                {/* eslint-disable-next-line */}I agree with your{" "}
                                <a href="#">Privacy Policy</a>.
                              </FormCheckbox>
                            </Col>
                          </Row>
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

export default ManageUsers;

