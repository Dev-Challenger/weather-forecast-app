import { useAuth0 } from "@auth0/auth0-react";
import './styles/AuthLogout.css'

const AuthLogout = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated &&
        <button className="button-logout" onClick={() => logout()}>Logout</button>
    )
};

export default AuthLogout;