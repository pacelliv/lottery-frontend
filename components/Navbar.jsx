import { ConnectButton } from "web3uikit"
import navbarStyles from "../src/styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={navbarStyles.navbar}>
            <p className={navbarStyles.logo}>Super Raffle</p>
            <div className={navbarStyles.connectButton}>
                <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}

export default Navbar
