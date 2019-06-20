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
import Modal from 'react-modal';

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

      ],
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { UserList } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Manage Users" subtitle="Users List" className="text-sm-left" />
        </Row>
        <Row>
          <Col lg="12" md="12">
          <ListGroupItem className="d-flex px-3 border-0">
            <Button theme="accent" className="ml-auto" onClick={this.openModal}>
              <i className="material-icons">add</i> Add New Users
            </Button>
          </ListGroupItem>
          </Col>
        </Row>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={{
            content : {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              border: 'none',
              background: 'transparent',
              padding: 0,
              transform: 'translate(-50%, -50%)'
            }
          }}
          contentLabel="Add New User"
        >
          <Col lg="12" md="12">
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
                              <label htmlFor="feUsername">Username</label>
                              <FormInput
                                id="feUsername"
                                type="text"
                                placeholder="Enter username for user"
                              />
                            </Col>
                            <Col md="6">
                              <label htmlFor="fePassword">Password</label>
                              <FormInput
                                id="fePassword"
                                type="password"
                                placeholder="Enter Password for user"
                              />
                            </Col>
                          </Row>
                          <Row form>
                            <Col md="6" className="form-group">
                              <label htmlFor="feFirstName">First Name</label>
                              <FormInput
                                id="feFirstName"
                                type="text"
                                placeholder="Enter User First Name"
                              />
                            </Col>
                            <Col md="6">
                              <label htmlFor="feLastName">Last Name</label>
                              <FormInput
                                id="feLastName"
                                type="text"
                                placeholder="Enter User Last Name"
                              />
                            </Col>
                          </Row>

                          <FormGroup>
                            <label htmlFor="feRole">Select an Access Role</label>
                            <FormSelect id="feRole">
                              <option>Select a role for the user</option>
                              <option value='0'>Analyst</option>
                              <option value='1'>Manager</option>
                            </FormSelect>
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
        </Modal>

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
                      <td>{parseInt(user.role, 10) === 1 ? "Manager" : "Analyst" }</td>
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

        </Row>

      </Container>
    );
  }
}

export default ManageUsers;

