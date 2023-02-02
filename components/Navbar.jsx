import { ConnectButton } from "web3uikit"
import navbarStyles from "../src/styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={navbarStyles.navbar}>
            <p className={navbarStyles.logo}>Super Raffle</p>
            <ConnectButton moralisAuth={false} />
        </div>
    )
}

export default Navbar
