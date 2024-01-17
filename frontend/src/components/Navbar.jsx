import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {useState} from 'react';
import { useCart } from "./ContextReducer";
import Modal from "../Modal";
import Cart from "../pages/Cart";

const NavBar = () => {
    const [cartView, setCartView] = useState(false);
    const data = useCart();
    localStorage.setItem("temp", "first");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
   const loadCart = () => {
     setCartView(true);
   };

  return (
    <>
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container style={{ height: "3rem" }}>
            <Navbar.Brand to="/" className="fs-3">
              Fooodie
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className="nav-link active fs-5" as={Link} to="/">
                Home
              </Nav.Link>
              {localStorage.getItem("authToken") ? (
                <Nav.Link className="nav-link active fs-5" as={Link} to="/myOrder">
                  My Orders
                </Nav.Link>
              ) : (
                ""
              )}
            </Nav>

            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link
                  className="btn bg-white me-2 text-success"
                  as={Link}
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="btn bg-white text-success"
                  as={Link}
                  to="/signup"
                >
                  SignUp
                </Link>
              </div>
            ) : (
              <div>
                <div
                  className="btn bg-white text-success mx-1 "
                  onClick={loadCart}
                >
                  <Badge color="secondary" >{data.length}
                    <ShoppingCartIcon />
                    
                  </Badge>
                  My Cart
                </div>
                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart></Cart>
                  </Modal>
                ) : (
                  ""
                )}
                <div
                  className="btn bg-white text-danger mx-2"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
