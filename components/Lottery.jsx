import styles from "@/styles/Home.module.css"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { abi, contractAddresses } from "../constants"
import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { useNotification } from "web3uikit"

function LotteryEntrance() {
    // Moralis knows the chainId because the Header components passes up all the information
    // about Metamask to the MoralisProvider and then the provider passes down that information
    // to all the components.
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const raffleAddress =
        chainId in contractAddresses ? contractAddresses[chainId][0] : null
    const [entranceFee, setEntranceFee] = useState("0")
    const [recentWinner, setRecentWinner] = useState("0")
    const [numPlayers, setNumPlayers] = useState("0")
    const dispatch = useNotification()

    const {
        runContractFunction: enterRaffle,
        data: enterTxResponse,
        isFetching,
        isLoading,
    } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "enterRaffle",
        params: {},
        msgValue: entranceFee,
    })

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getEntranceFee",
        params: {},
    })

    const { runContractFunction: getRecentWinner } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getRecentWinner",
        params: {},
    })

    const { runContractFunction: getNumberOfPlayers } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getNumberOfPlayers",
        params: {},
    })

    const updateUI = async () => {
        // Another way we could make a contract call:
        // const options = { abi, contractAddress: raffleAddress }
        // const fee = await Moralis.executeFunction({
        //     functionName: "getEntranceFee",
        //     ...options,
        // })
        const entranceFeeFromCall = (await getEntranceFee()).toString()
        const recentWinnerFromCall = (await getRecentWinner()).toString()
        const numPlayersFromCall = (await getNumberOfPlayers()).toString()
        setEntranceFee(entranceFeeFromCall)
        setRecentWinner(recentWinnerFromCall)
        setNumPlayers(numPlayersFromCall)
    }

    window.addEventListener("resize", () => {
        console.log(window.innerWidth)
    })

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUI()
        }
    }, [isWeb3Enabled])

    // An example filter for listening for events:
    // const filter = {
    //     address: raffleAddress,
    //     topics: [
    //         // the name of the event, parentheses containing the data type of each event, no spaces
    //         ethers.utils.id("RaffleEnter(address)"),
    //     ],
    // }

    // console.log(filter.topics)

    const handleSuccess = async (tx) => {
        try {
            await tx.wait(1)
            handleNewNotificacion(tx)
            updateUI()
        } catch (error) {
            console.log(error)
        }
    }

    const handleNewNotificacion = () => {
        dispatch({
            type: "info",
            message: "Transaction Complete",
            title: "Tx Notification",
            position: "topR",
            icon: "bell",
        })
    }

    return (
        <div className={styles.entrance}>
            {raffleAddress ? (
                <div className={styles.entranceRaffle}>
                    <button
                        onClick={async () => {
                            await enterRaffle({
                                // this onSuccess method doesn't check if the transaction has block confirmations,
                                // it only checks if the transaction was successfully sent to Metamask. It's in
                                // handleSuccess where we wait for the transaction to be mined.
                                onSuccess: handleSuccess,
                                onError: (error) => console.log(error),
                            })
                        }}
                        disabled={isFetching || isLoading}
                    >
                        {isFetching || isLoading ? (
                            <div className={styles.loader}></div>
                        ) : (
                            "Enter Raffle"
                        )}
                    </button>
                    <div className={styles.containerStats}>
                        <p>
                            Pool:{" "}
                            {ethers.utils.formatUnits(
                                (parseInt(entranceFee) * numPlayers).toString(),
                                "ether"
                            )}{" "}
                            ETH
                        </p>
                        <p>Number of players: {numPlayers}</p>
                        <p>
                            Last winner: {recentWinner.slice(0, 6)}...
                            {recentWinner.slice(recentWinner.length - 4)}
                        </p>
                    </div>
                </div>
            ) : (
                <div>
                    <p>No address detected</p>
                </div>
            )}
        </div>
    )
}

export default LotteryEntrance
