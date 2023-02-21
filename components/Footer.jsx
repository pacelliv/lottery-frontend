import { FaTwitter, FaGithub } from "react-icons/fa"
import footerStyles from "../src/styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <a href="https://github.com/pacelliv" target="_blank">
                <FaGithub className={footerStyles.faIcon} />
            </a>
            <a href="https://twitter.com/pacelliv3" target="_blank">
                <FaTwitter className={footerStyles.faIcon} />
            </a>
        </div>
    )
}

export default Footer
