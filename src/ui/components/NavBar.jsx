import { useUser } from "../../hooks/useUser"
import { NavBarAdmin } from './NavBarAdmin'
import { NavBarPublic } from "./NavBarPublic"

export const NavBar = () => {

    const { isAuthenticated } = useUser()

    return (
        <>
            {
                isAuthenticated
                    ?
                    <NavBarAdmin />
                    :
                    <NavBarPublic />
            }

        </>
    )
}
