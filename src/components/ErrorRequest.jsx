import { Link } from "react-router-dom";

const ErrorRequest = () => {
    
    return (
        <>
            <h2>Something went wrong<br/>. . .</h2>
            <Link className="link-button" to="/">Go back</Link>
        </>
    )

}

export default ErrorRequest;