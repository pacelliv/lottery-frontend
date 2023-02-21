import { FaWallet } from "react-icons/fa"
import { useEffect } from "react"
import { useMoralis } from "react-moralis"
import Jazzicon, { jsNumberForAddress } from "react-jazzicon"
import styled from "styled-components"

const Div = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ced0d5;
    border-radius: 5px;
    cursor: pointer;
    padding: 0.5em 1em;
    gap: 5px;
    transition: all 0.5s ease;

    .fa-wallet {
        color: darkblue;
        margin-right: 0.1em;
        margin-left: 0.4em;
    }

    :hover {
        background-color: #f5f7fd;
        border: 1px solid #696969;
    }

    @media (max-width: 630px) {
        margin: auto 45px auto auto;
    }
`

const Button = styled.button`
    background: none;
    font-weight: 600;
    display: block;
    color: #1c1c1c;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;

    @media (max-width: 630px) {
        font-size: 0.85rem;
        margin: auto 0 auto auto;
    }
`

const ConnectButton = () => {
    const {
        isWeb3Enabled,
        isWeb3EnableLoading,
        account,
        enableWeb3,
        Moralis,
        deactivateWeb3,
    } = useMoralis()

    const connectWallet = async () => {
        const ret = await enableWeb3()
        if (typeof ret !== "undefined") {
            if (typeof window !== "undefined") {
                window.localStorage.setItem("connected", "injected")
            }
        }
    }

    useEffect(() => {
        if (
            !isWeb3Enabled &&
            typeof window !== "undefined" &&
            window.localStorage.getItem("connected")
        ) {
            enableWeb3()
        }
    }, [isWeb3Enabled])

    useEffect(() => {
        Moralis.onAccountChanged((newAccount) => {
            if (newAccount == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
            }
        })
    }, [])

    return (
        <Div>
            {isWeb3Enabled ? (
                <Jazzicon diameter={22} seed={jsNumberForAddress(account)} />
            ) : (
                <FaWallet className="fa-wallet" />
            )}
            <Button onClick={connectWallet} disabled={isWeb3EnableLoading}>
                {isWeb3Enabled
                    ? `${account.slice(0, 5)}...${account.slice(
                          account.length - 3
                      )}`
                    : "Connect Wallet"}
            </Button>
        </Div>
    )
}

export default ConnectButton
