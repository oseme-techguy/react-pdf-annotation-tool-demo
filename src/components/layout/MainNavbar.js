import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import {
  Container,
  Form,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink
} from "shards-react";

import { Store, Constants } from "../../store/auth";
import AppDispatcher from "../../store/dispatcher.js";


class MainNavbar extends React.Component {
  constructor(props) {
    super(props); 
    const { layout, stickyTop } = props;
    
    this.state = {
      visible: false,
      classes: classNames(
        "main-navbar",
        "bg-white",
        stickyTop && "sticky-top"
      )
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleLogOutClick = this.handleLogOutClick.bind(this);
    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  handleClick() {
    AppDispatcher.dispatch({
      actionType: Constants.TOGGLE_SIDEBAR
    });
  }

  handleLogOutClick() {
    AppDispatcher.dispatch({
      actionType: Constants.LOG_OUT
    });
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div className={this.state.classes}>
        <Container className="p-0">
          <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
            <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex"></Form>
  
            <Nav navbar className="border-left flex-row">
              <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
                <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
                  <img
                    className="user-avatar rounded-circle mr-2"
                    src={require("./../../images/avatars/1.jpg")}
                    alt="User Avatar"
                  />{" "}
                  <span className="d-none d-md-inline-block">Oseme Odigie</span>
                </DropdownToggle>
                <Collapse tag={DropdownMenu} right small open={this.state.visible}>
                  <DropdownItem tag={Link} to="/user-profile-lite">
                    <i className="material-icons">&#xE7FD;</i> Profile
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={Link} to="#" className="text-danger" onClick={this.handleLogOutClick}>
                    <i className="material-icons text-danger">&#xE879;</i> Logout
                  </DropdownItem>
                </Collapse>
              </NavItem>
            </Nav>

            <nav className="nav">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" onClick={this.handleClick} className="nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-inline d-lg-none text-center">
                <i className="material-icons">&#xE5D2;</i>
              </a>
            </nav>
          </Navbar>
        </Container>
      </div>
    );
  }
}


MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool
};

MainNavbar.defaultProps = {
  stickyTop: true
};

export default MainNavbar;
