import { Container, Navbar, Nav, Image } from "react-bootstrap";


function NavBar() {
    return (
        <Navbar className="bg-opacity-25" bg="light" variant="light">
            <Container>
                <Nav.Link href="/">
                    <Image src="/fietslabyrint-logo.png" height="70" className="justify-content-start d-inline-block align-text-top" alt="logo" />
                </Nav.Link>
            </Container>
        </Navbar>
    );
}

export default NavBar; 
