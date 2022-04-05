import { Navbar, Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons'

const NavBar = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container style={{'marginLeft':'1em'}}>
                <Navbar.Brand href="#home">
                    <FontAwesomeIcon icon = {faWaveSquare} style = {{'marginRight':'1em'}}/>
                    Music Library
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavBar;