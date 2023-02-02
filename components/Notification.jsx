import notificationStyles from "../src/styles/Notification.module.css"

function ToastNotification({ closeNotification, on }) {
    const styles = {
        display: on ? "block" : "none",
        transform: "translate(calc(100% + 450px), -240px)",
        transition: "all 3s cubic-bezier(0.68, -0.55, 0.265, 1.35) ease-in",
        position: "absolute",
    }

    return (
        <div style={styles}>
            <div className={notificationStyles.toastContent}>
                <img
                    onClick={closeNotification}
                    className={notificationStyles.xmark}
                    src="../../xmark.png"
                />
                <div className={notificationStyles.message}>
                    <img
                        className={notificationStyles.tickMark}
                        src="../../tick-mark.png"
                    />
                    <span>You entered Super Raffle</span>
                </div>
            </div>
        </div>
    )
}

export default ToastNotification
