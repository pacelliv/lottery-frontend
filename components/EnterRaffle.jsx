import { useEffect, useState } from "react"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { ethers } from "ethers"
import { abi, contractAddresses } from "../constants"
import Logos from "./Logos"
import RaffleStats from "./RaffleStats"
import ToastNotification from "./Notification"
import enterRaffleStyles from "../src/styles/EnterRaffle.module.css"
import RaffleDescription from "./RaffleDescription"

const EnterRaffle = () => {
    const [on, setOn] = useState(false)
    const [entranceFee, setEntranceFee] = useState("0")
    const [numberOfPlayers, setNumberOfPlayers] = useState("0")
    const [recentWinner, setRecentWinner] = useState("0")
    const formattedEntranceFee = ethers.utils.formatUnits(entranceFee, "ether")
    const formattedRecentWinner = `${recentWinner.slice(
        0,
        5
    )}...${recentWinner.slice(recentWinner.length - 3)}`

    const supportedChains = ["5", "31337"]
    const { chainId: chainIdHex, enableWeb3, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const raffeAddress =
        chainId in contractAddresses ? contractAddresses[chainId][0] : null

    const {
        runContractFunction: enterRaffle,
        isLoading,
        isFetching,
    } = useWeb3Contract({
        abi,
        contractAddress: raffeAddress,
        functionName: "enterRaffle",
        params: {},
        msgValue: entranceFee,
    })

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi,
        contractAddress: raffeAddress,
        functionName: "getEntranceFee",
        params: {},
    })

    const { runContractFunction: getNumberOfPlayers } = useWeb3Contract({
        abi,
        contractAddress: raffeAddress,
        functionName: "getNumberOfPlayers",
        params: {},
    })

    const { runContractFunction: getRecentWinner } = useWeb3Contract({
        abi,
        contractAddress: raffeAddress,
        functionName: "getRecentWinner",
        params: {},
    })

    const updateUI = async () => {
        const entranceFeeFromContractCall = (await getEntranceFee()).toString()
        const numberOfPlayersFromContractCall = (
            await getNumberOfPlayers()
        ).toString()
        const recentWinnerFromContractCall = (
            await getRecentWinner()
        ).toString()
        setEntranceFee(entranceFeeFromContractCall)
        setNumberOfPlayers(numberOfPlayersFromContractCall)
        setRecentWinner(recentWinnerFromContractCall)
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUI()
        }
    }, [isWeb3Enabled])

    const handleSuccess = async (tx) => {
        try {
            await tx.wait(1)
            updateUI()
            checkEvents()
        } catch (error) {
            console.error(error)
        }
    }

    const checkEvents = async () => {
        const provider = await enableWeb3()
        const raffle = new ethers.Contract(raffeAddress, abi, provider)

        raffle.on("RaffleEnter", () => setOn(true))
        raffle.on("WinnerPicked", () => updateUI())
    }

    const closeNotification = () => {
        setOn(false)
    }

    return (
        <div>
            <ToastNotification closeNotification={closeNotification} on={on} />
            <div className={enterRaffleStyles.enterRaffleWrapper}>
                {supportedChains.includes(chainId.toString()) ? (
                    <div className={enterRaffleStyles.cta}>
                        <button
                            onClick={async () => {
                                await enterRaffle({
                                    // this onSuccess method doesn't check if the transaction has block confirmations,
                                    // it only checks if the transaction was successfully sent to Metamask. It's in
                                    // handleSuccess where we wait for the transaction to be mined.
                                    onSuccess: handleSuccess,
                                    onError: (error) => console.error(error),
                                })
                            }}
                            className={enterRaffleStyles.enterRaffle}
                            disabled={isLoading || isFetching}
                        >
                            Enter Raffle
                        </button>
                        <button className={enterRaffleStyles.getEth}>
                            Get Testnet ETH
                        </button>
                    </div>
                ) : (
                    <div className={enterRaffleStyles.warningContainer}>
                        <p className={enterRaffleStyles.warningMessage}>
                            <span>
                                <img
                                    className={enterRaffleStyles.warning}
                                    src="../warning-icon.png"
                                />
                            </span>
                            Chain not supported. Select Ethereum Göerli (5) or
                            Hardhat-Localhost (31337).
                        </p>
                    </div>
                )}
            </div>

            <div className={enterRaffleStyles.grid}>
                <RaffleStats
                    entranceFee={formattedEntranceFee}
                    numberOfPlayers={numberOfPlayers}
                    recentWinner={formattedRecentWinner}
                />
                <RaffleDescription />
                <Logos />
            </div>
        </div>
    )
}

export default EnterRaffle
