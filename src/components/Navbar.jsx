import AuthLogout from './AuthLogout';
import { Link } from 'react-router-dom';
import weatherIconLogo from '../assets/weatherIconLogo.png';
import './styles/Navbar.css'

const Navbar = () => {

    return (
        <div className="navbar">
            <Link to="/">
                <div className='link-logo'>

                    <img className="logo-icon" src={weatherIconLogo} alt="logo" />
                    <p>Weather Forecast</p>
                </div>
            </Link>
            <AuthLogout />
        </div>
    )
}


export default Navbar;