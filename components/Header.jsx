import styles from "@/styles/Home.module.css"
import { ConnectButton } from "web3uikit"

function Header() {
    return (
        <div className={styles.header}>
            <div>
                <h3>Super Raffle</h3>
            </div>
            <div>
                <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}

export default Header
