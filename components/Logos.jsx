import enterRaffleStyles from "../src/styles/EnterRaffle.module.css"

const Logos = () => {
    return (
        <div className={enterRaffleStyles.cardLogos}>
            <p>Built with:</p>
            <div>
                <a href="https://www.chaijs.com/" target="_blank">
                    <img
                        className={enterRaffleStyles.logo}
                        src="../images/chaijs-logo.png"
                    />
                </a>
                <a href="https://chain.link/" target="_blank">
                    <img
                        className={enterRaffleStyles.logo}
                        src="../images/chainlink-logo.png"
                    />
                </a>
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                >
                    <img
                        className={enterRaffleStyles.logo}
                        src="../images/css-logo.png"
                    />
                </a>
                <a href="https://hardhat.org/" target="_blank">
                    <img
                        className={enterRaffleStyles.logo}
                        src="../images/hardhat-logo.jpg"
                    />
                </a>
                <a href="https://nodejs.org/en/" target="_blank">
                    <img
                        className={enterRaffleStyles.logo}
                        src="../images/nodejs-logo.png"
                    />
                </a>
                <a href="https://www.javascript.com/" target="_blank">
                    <img
                        className={enterRaffleStyles.logo}
                        src="../images/javascript-logo.png"
                    />
                </a>
                <a href="https://metamask.iot" target="_blank">
                    <img
                        className={enterRaffleStyles.logo}
                        src="../images/metamask-logo.png"
                    />
                </a>
                <a href="https://soliditylang.org/" target="_blank">
                    <img
                        className={enterRaffleStyles.logo}
                        src="../images/solidity-logo.png"
                    />
                </a>
                <a href="https://reactjs.org/" target="_blank">
                    <img
                        className={enterRaffleStyles.logo}
                        src="../images/reactjs-logo.png"
                    />
                </a>
                <a href="https://nextjs.org/" target="_blank">
                    <img className={enterRaffleStyles.logo} src="../next.svg" />
                </a>
                <a href="https://moralis.io/" target="_blank">
                    <img
                        className={enterRaffleStyles.logo}
                        src="../images/moralis-logo.png"
                    />
                </a>
            </div>
        </div>
    )
}

export default Logos
