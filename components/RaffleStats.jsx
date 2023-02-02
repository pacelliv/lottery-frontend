import enterRaffleStyles from "../src/styles/EnterRaffle.module.css"

function RaffleStats({ entranceFee, numberOfPlayers, recentWinner }) {
    return (
        <div className={enterRaffleStyles.cardStats}>
            <a href="https://www.ethereum.org/" target="_blank">
                <img
                    className={enterRaffleStyles.mainLogo}
                    src="../images/ethereum-logo.png"
                />
            </a>
            <p>
                Entrance Fee:{" "}
                <span className={enterRaffleStyles.grey}>
                    {entranceFee} ETH
                </span>
            </p>
            <p>
                Current Pool:{" "}
                <span className={enterRaffleStyles.grey}>
                    {numberOfPlayers * Number(entranceFee)} ETH
                </span>
            </p>
            <p>
                Number of players:{" "}
                <span className={enterRaffleStyles.grey}>
                    {numberOfPlayers}
                </span>
            </p>
            <p>
                Most recent winner:{" "}
                <span className={enterRaffleStyles.grey}>{recentWinner}</span>
            </p>
        </div>
    )
}

export default RaffleStats
