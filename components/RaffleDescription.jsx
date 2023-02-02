import enterRaffleStyles from "../src/styles/EnterRaffle.module.css"

const RaffleDescription = () => {
    return (
        <div className={enterRaffleStyles.card}>
            <p className={enterRaffleStyles.description}>
                Autonomous and verifiably lottery{" "}
            </p>
            <p className={enterRaffleStyles.breakLine}>
                Powered by Chainlink's VRF and Automation
            </p>
            <a
                href="https://github.com/pacelliv/smartcontract-lottery"
                target="_blank"
                className={enterRaffleStyles.documentation}
            >
                Documentation <img src="../external-link.png" />
            </a>
        </div>
    )
}

export default RaffleDescription
