import './styles/SearchLoading.css';

const SearchLoading = () => {

    return (
        <div className="loading-container">
            <div className="pulse pulse1"></div>
            <div className="pulse pulse2"></div>
            <div className="pulse pulse3"></div>
            <div className="pulse pulse4"></div>

            <h1 className='loading-text'>Loading Weather Data</h1>
        </div>
    )
}

export default SearchLoading;