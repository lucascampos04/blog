import { useEffect } from "react"
import { HeaderHome } from "../../Components/Header/_HeaderHome"

export const Homepage = () => {
    useEffect(() => {
        document.title = "Home"
    }, [])

    return(
        <div style={{margin: "0%", padding: "0%"}}>
            <HeaderHome/>
        </div>
    )
}