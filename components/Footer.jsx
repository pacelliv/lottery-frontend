import styles from "@/styles/Home.module.css"

function Footer() {
    return (
        <div className={styles.footer}>
            <a
                href="https://github.com/pacelliv/smartcontract-lottery"
                target="_blank"
            >
                <img src="../images/github-logo.png" />
            </a>
            <a href="https://twitter.com/pacelliv3" target="_blank">
                <img src="../images/twitter-logo.png" />
            </a>
        </div>
    )
}

export default Footer
