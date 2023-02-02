import Link from "next/link"
import footerStyles from "../src/styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <a href="https://github.com/pacelliv" target="_blank">
                <img src="../images/github-logo.png" />
            </a>
            <a href="https://twitter.com/pacelliv3" target="_blank">
                <img src="../images/twitter-logo.png" />
            </a>
        </div>
    )
}

export default Footer
