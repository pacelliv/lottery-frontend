import ConnectButton from "./ConnectButton"
import navbarStyles from "../src/styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={navbarStyles.navbar}>
            <p className={navbarStyles.logo}>Super Raffle</p>
            <ConnectButton />
        </div>
    )
}

export default Navbar
