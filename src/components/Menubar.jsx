import { Navbar } from "react-bootstrap"
import { Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const Menubar =()=>{


return(
<>
      <Navbar bg="danger" data-bs-theme="Danger" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="text-light">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-light">Contacto</Nav.Link>
            
            <Nav.Link href="#pricing" className="text-light">Happy Cake</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
</>

)
}

export default Menubar