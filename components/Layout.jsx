import Meta from "./Meta"
import Navbar from "./Navbar"
import layoutStyles from "../src/styles/Layout.module.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Navbar />
            <div className={layoutStyles.container}>
                <main className={layoutStyles.main}>{children}</main>
            </div>
            <Footer />
        </>
    )
}

export default Layout
