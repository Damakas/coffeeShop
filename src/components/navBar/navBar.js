import './navBar.css';
import coffenbobs from '../img/coffenbobs.png';
import { Nav } from 'react-bootstrap';


function NavBar() {
    return (
        <Nav className='navbar'
            activeKey="/home"
            id='navBardId'
        // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item className='navbar-li'>
                <img src={coffenbobs} alt="" />
                <Nav.Link href="/">Coffee house</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/ourcoffee">Our Coffee</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/foryourpleasure">For your pleasure</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavBar


