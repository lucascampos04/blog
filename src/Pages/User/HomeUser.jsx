import { useEffect } from "react"

import { _MainAllPeoples } from "../../Components/Main/_MainAllPeoples"

export const HomeUser = () => {
    useEffect(() => {
        document.title = "Home"
    }, [])

    
    return(
        <_MainAllPeoples/>
    )
}