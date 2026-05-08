import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Link, useLocation } from "react-router"

const WBar = () => {
  const location = useLocation()
  return (
    <Navbar expand="lg" bg="primary" className="position-sticky sticky-top">
      <Container fluid className="mx-lg-3">
        <Navbar.Brand href="/" className=" d-flex gap-2">
          <img
            alt="logo"
            src="/images/icons/star/38.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          3D Weather
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
              to="/"
            >
              Home
            </Link>
            <NavDropdown
              title="Cities"
              id="basic-nav-dropdown"
              align="end"
              active={
                location.pathname === "/city/Rome%20IT"
                  ? true
                  : location.pathname === "New%20York%20US"
                    ? true
                    : location.pathname === "/city/Tokyo%20JP"
                      ? true
                      : location.pathname === "/city/Paris%20FR"
                        ? true
                        : false
              }
            >
              <NavDropdown.Item>
                <Link
                  className={
                    location.pathname === "/city/Rome%20IT"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/city/Rome%20IT"
                >
                  Rome
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className={
                    location.pathname === "/city/New%20York%20US"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/city/New%20York%20US"
                >
                  New York
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className={
                    location.pathname === "/city/Tokyo%20JP"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/city/Tokyo%20JP"
                >
                  Tokyo
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className={
                    location.pathname === "/city/Paris%20FR"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/city/Paris%20FR"
                >
                  Paris
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default WBar
