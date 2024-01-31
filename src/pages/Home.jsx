import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCity, setLoggedState } from "../state/slices/manageUser";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import UserProfile from "../components/UserProfile";
import weatherIcon from '../assets/weatherIconHome.webp';
import './styles/Home.css'


const Home = () => {

    const dispatch = useDispatch()
    const [cityInput, setCityInput] = useState(false);
    const navigateTo = useNavigate();
    let input = document.getElementById("search-bar");;

    useEffect(() => {
        dispatch(setLoggedState(true))

        // checking Enter-keypress
        input = document.getElementById("search-bar");
        input.addEventListener("keyup", (e) => {
            e.preventDefault();
            if (e.key === "Enter" && e.label!== "") {
                if(e.target.value!=="") dispatch(setCity( e.target.value ))
                navigateTo("/weatherforecast")
            }
        })
        return () => input.removeEventListener("keydown", (e) => { })
    }, [])

    const searchInput = (e) => {
        dispatch(setCity(e.label))
        setCityInput(true)
    }

    return (
        <>
            {/* Home img and user details */}
            <div className="user-profile">
                <img className="logo" src={weatherIcon} alt="logo" />
                <UserProfile />
            </div>

            <div className="input-search">

                {/* Search City Input Bar */}
                <SearchBar placeholder="Search City" onSearchChange={searchInput} />

                {/* Display Weather Button */}
                <Link className="link-button" to={cityInput ? "/weatherforecast" : ""}>Display Weather</Link>

            </div>
        </>
    )
}


export default Home;