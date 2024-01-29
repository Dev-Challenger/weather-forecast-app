import AuthLogout from './AuthLogout';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'

const Navbar = () => {

    return (
        <div className="navbar">
            <Link className="link-home" to="/">Weather Forecast</Link>
            <AuthLogout />
        </div>
    )
}


export default Navbar;