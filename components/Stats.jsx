import styles from "@/styles/Home.module.css"

function Stats() {
    return (
        <div className={styles.stats}>
            <div className={styles.card}>
                <p>
                    Verifiably, Autonomous &
                    <br />
                    <span>Decentralized</span>
                </p>
            </div>
            <div className={styles.card}>
                <p>
                    Join the raffle <br />
                    for only:
                    <br />
                    <span>0.01 ETH</span>
                </p>
            </div>
            <div className={styles.card}>
                <p>
                    Built <span>with:</span>
                </p>
                <div className={styles.logoContainer}>
                    <img
                        className={styles.logo}
                        src="../images/chainlink-logo.png"
                    />
                    <img
                        className={styles.logo}
                        src="../images/ethereum-logo.png"
                    />
                    <img
                        className={styles.logo}
                        src="../images/metamask-logo.png"
                    />
                    <img
                        className={styles.logo}
                        src="../images/hardhat-logo.jpg"
                    />
                    <img
                        className={styles.logo}
                        src="../images/reactjs-logo.png"
                    />
                    <img
                        className={styles.logo}
                        src="../images/solidity-logo.png"
                    />
                    <img
                        className={styles.logo}
                        src="../images/truffle-logo.png"
                    />
                    <img
                        className={styles.logo}
                        src="../images/chaijs-logo.png"
                    />
                    <img
                        className={styles.logo}
                        src="../images/nodejs-logo.png"
                    />
                    <img
                        className={styles.logo}
                        src="../images/javascript-logo.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default Stats
