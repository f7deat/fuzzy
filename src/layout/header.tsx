import { useContext } from "react"
import FacebookContext from "../contexts/facebook-context"

export const Header = () => {
    const {access_token} = useContext(FacebookContext)
    return (
        <header>
            {access_token}
        </header>
    )
}