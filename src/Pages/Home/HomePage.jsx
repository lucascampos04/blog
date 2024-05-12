import { useEffect } from "react"
import { HeaderHome } from "../../Components/Header/_HeaderHome"
import { VerificationLocalStorage } from "../../Patterns/VerificLocalStorage/VerificationLocalStorage"

export const Homepage = () => {
    useEffect(() => {
        document.title = "Home"
    }, [])

    return(
        <div style={{margin: "0%", padding: "0%"}}>
            <VerificationLocalStorage 
                storageKey="@AuthFirebase:user" 
                redirectTo={"/login"}
            />
            <HeaderHome/>
        </div>
    )
}