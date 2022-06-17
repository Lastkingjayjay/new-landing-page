import { Navbar, Container, Nav } from "react-bootstrap";
import Main from "./componets/Main";


function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Welcome home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
