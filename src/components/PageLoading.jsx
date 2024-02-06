import './styles/PageLoading.css'

const PageLoading = ({waitText}) => {

    return (
        <div className="loading-container">
         
            <div className="loading-sun"/>
            <h1>{waitText}</h1>

          </div>
    )
}

export default PageLoading;