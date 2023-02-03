import EnterRaffle from "components/EnterRaffle"
import homeStyles from "../styles/Home.module.css"

const Home = () => {
    return (
        <>
            <div className={homeStyles.section}>
                <h1 className={homeStyles.title}>
                    The Decentralized Lottery of the Web3
                </h1>
                <p className={homeStyles.subtitle}>
                    Connect your wallet and test your luck
                </p>
                <div className={homeStyles.sectionEnter}>
                    <EnterRaffle />
                </div>
            </div>
        </>
    )
}

export default Home
