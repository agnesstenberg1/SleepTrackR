import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import House from '../ikons/house';
import Overview from '../ikons/overview';
import Rewards from '../ikons/rewards';
import Settings from '../ikons/settings';
import '../../cssFiles/menu/bottomMenu.css';

function BottomMenu() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="bottom" className="bottom-menu">
        <Container className="bottom-menu-2">
           
          <Nav className="bottom-menu-nav">
            <Nav.Link href="#home" className="menu-ikon"><House/></Nav.Link>
            <Nav.Link href="#overview" className="menu-ikon"><Overview/></Nav.Link>
            <Nav.Link href="#rewards" className="menu-ikon"><Rewards/></Nav.Link>
            <Nav.Link href="#settings" className="menu-ikon"><Settings/></Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default BottomMenu;  