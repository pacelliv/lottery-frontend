import { useEffect } from "react"
import { useMoralis } from "react-moralis"

function ManualHeader() {
    const {
        enableWeb3,
        isWeb3Enabled,
        account,
        Moralis,
        deactivateWeb3,
        isWeb3EnableLoading,
    } = useMoralis()

    const connectWallet = async () => {
        await enableWeb3()
        if (typeof window !== "undefined") {
            localStorage.setItem("connected", "injected")
        }
    }

    useEffect(() => {
        if (isWeb3Enabled) return

        if (typeof window !== "undefined") {
            if (localStorage.getItem("connected")) {
                connectWallet()
            }
        }
    }, [isWeb3Enabled])

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`)
            // if account is equal to null, we can assume the account is disconnected
            if (account == null) {
                localStorage.removeItem("connected")
                deactivateWeb3() // will set isWeb3Enabled to false
                console.log("Null account found")
            }
        })
    }, [])

    return (
        <div>
            {account ? (
                <div>
                    Connected to {account.slice(0, 5)}...
                    {account.slice(account.length - 4)}
                </div>
            ) : (
                <button onClick={connectWallet} disabled={isWeb3EnableLoading}>
                    Connect
                </button>
            )}
        </div>
    )
}

export default ManualHeader
