import { useContext } from "react"
import { authContextGoogle } from "../../Context/LoginContext/authGoogle"
import { Navigate } from "react-router-dom"

export const AuthPage = () => {
    const {signInGoogle, signed} = useContext(authContextGoogle)                                                                           

    if (signed){
        return (<Navigate to={"/window-admin"}/>)
    }

    return (
        <div className="container-fluid">
            <div className="login-modal-container">
                <div className="form-row">
                    <button onClick={() => {signInGoogle()}}>
                        Google
                    </button>
                </div>
            </div>
        </div>
    )
}
