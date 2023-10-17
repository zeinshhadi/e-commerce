import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CForm,
  CFormInput,
  CButton,
} from "@coreui/react";
import { Link } from "react-router-dom";
import "./index.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import profilePic from "../../assets/images/back.jpg";

function Home() {
    const [visible, setVisible] = useState(false);
  return (
    <div>
      <CNavbar expand="lg" colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CForm className="d-flex">
              <CFormInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" color="success" variant="outline">
                Search
              </CButton>
            </CForm>
            <CNavbarNav>
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle color="secondary">Profile</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Edit Profile</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Log Out</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
      <Sidebar className="sideBarComp">
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <p
            className="logo"
            style={{
              fontSize: "30px",
              paddingLeft: "40px",
              paddingBottom: "10px",
              paddingTop: "10px",
            }}
          >
            Shop Nexa
          </p>
          <MenuItem component={<Link to="/overview" />} className="menu-item">
            {" "}
            Overview
          </MenuItem>
          <MenuItem component={<Link to="/listings" />} className="menu-item">
            {" "}
            Listings
          </MenuItem>
          <MenuItem component={<Link to="/orders" />} className="menu-item">
            {" "}
            Orders
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default Home