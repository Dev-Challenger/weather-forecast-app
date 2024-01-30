import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthLogin from "../components/AuthLogin";
import worldIcon from '../assets/worldIcon.png';
import './styles/LandingPage.css'

const LandingPage = () => {

    const { isLoading, error, isAuthenticated } = useAuth0();
    const { loggedIn } = useSelector((state) => state.user);
    const navigateTo = useNavigate();

    useEffect(() => {
        if (isAuthenticated && !loggedIn) {
            navigateTo('/home')
        }
    }, [isAuthenticated])

    return (
        <div className="landing-container">
        
            <img className="logo" src={worldIcon} alt="logo" />

            <h1 className="text-welcome">Hello World!</h1>
            <p>Welcome to the weather forecast web application. Please login with your
                Github user to use the application and view the weather in your city.</p>

            <div className="user-state-actions">
                {error && <div> There was a problem with logging in: {error.message}</div>}
                {isLoading && <div> User Logging In . . .</div>}

                {!isLoading && !error &&
                    <AuthLogin />
                }

                {isAuthenticated && loggedIn &&
                    <Link className="link-button" to="/home">Resume Session</Link>
                }
            </div>

        </div>
    )
}

export default LandingPage;