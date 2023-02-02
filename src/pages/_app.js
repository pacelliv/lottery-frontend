import { MoralisProvider } from "react-moralis"
import Layout from "components/Layout"

import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </MoralisProvider>
    )
}
