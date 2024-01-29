import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCity, setLoggedState } from "../state/slices/manageUser";
import UserProfile from "../components/UserProfile";

import weatherIcon from '../assets/weatherIcon.png';
import './styles/Home.css'


const Home = () => {

    const dispatch = useDispatch()
    const [validCity, setValidCity] = useState(false);

    useEffect(() => {
        dispatch(setLoggedState(true))
    }, [])

    function checkValidCity(city) {
        console.log("Checking City...");

        // if input matches an existing city, then proceed
        dispatch(setCity(city))
        setValidCity(true)

        // if not, then stay and display 'invalid city' below the search bar

    }

    return (
        <>
            <div className="user-profile">
            <img className="logo" src={weatherIcon} alt="logo" />
                <UserProfile />
            </div>
            <div className="input-search">

                <input type="text" placeholder=" City" onChange={(e) => checkValidCity(e.target.value)} />

                <Link className="link-button" to={validCity ? "/weatherforecast" : ""}>Display Weather</Link>

            </div>
        </>
    )
}


export default Home;