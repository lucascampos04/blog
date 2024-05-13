import { useEffect } from "react"
import { HeaderHome } from "../../Components/Header/_HeaderHome"
import { VerificationLocalStorage } from "../../Patterns/VerificLocalStorage/VerificationLocalStorage"
import { _MainAllPeoples } from "../../Components/Main/_MainAllPeoples"

export const Homepage = () => {
    useEffect(() => {
        document.title = "Home"
    }, [])

    return(
        <div style={{margin: "0%", padding: "0%", height: "100svh", overflow: "hidden"}}>
            <VerificationLocalStorage 
                storageKey="@AuthFirebase:user" 
                redirectTo={"/"}
            />
            <HeaderHome/>
            <_MainAllPeoples/>
        </div>
    )
}