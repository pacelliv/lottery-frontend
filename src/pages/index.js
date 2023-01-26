import Head from "next/head"
import styles from "@/styles/Home.module.css"
// import ManualHeader from "components/ManualHeader"
import Header from "components/Header"
import Lottery from "components/Lottery"
import Stats from "components/Stats"
import Footer from "components/Footer"
import { useMoralis } from "react-moralis"
import { contractAddresses } from "../../constants"
import { ethers } from "ethers"

export default function Home() {
    const supportedChains = ["31337", "5"]
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const raffleAddress =
        chainId in contractAddresses ? contractAddresses[chainId][0] : null

    // An example filter for listening for events:
    const filter = {
        address: raffleAddress,
        topics: [
            // the name of the event, parentheses containing the data type of each event, no spaces
            ethers.utils.id("RaffleEnter(address)"),
        ],
    }

    return (
        <div>
            <Head>
                <title>Super Raffle</title>
                <meta
                    name="description"
                    content="A Decentralized Smart Contract Lottery"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                {/* <----Google Fonts----> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@900&family=Inter:wght@400;500;700;900&family=Open+Sans:wght@700&family=Oxygen:wght@700&family=Roboto:wght@900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            {/* <ManualHeader /> */}
            <Header />
            <div className={styles.main}>
                <h1 className={styles.title}>
                    The Decentralized Lottery <br />
                    of the Web3
                </h1>
            </div>

            {isWeb3Enabled ? (
                <div className={styles.main}>
                    {supportedChains.includes(parseInt(chainId).toString()) ? (
                        <Lottery />
                    ) : (
                        <div className={styles.supported}>
                            <p className={styles.warning}>⚠️⚠️</p>
                            <h4>
                                Please, switch to a supported network. The
                                supported networks are:
                                <br />
                                {` Hardhat-Localhost (${supportedChains[0]}) and Goerli (${supportedChains[1]})`}
                                .
                            </h4>
                        </div>
                    )}
                </div>
            ) : (
                <div className={styles.connect}>
                    <h4>Connect your wallet to play</h4>
                </div>
            )}
            <Stats />
            <Footer />
        </div>
    )
}
