import notificationStyles from "../src/styles/Notification.module.css"

function ToastNotification({ closeNotification, on }) {
    const styles = {
        display: on ? "block" : "none",
    }

    return (
        <div
            style={styles}
            className={`${notificationStyles.container} ${notificationStyles["top-right"]}`}
        >
            <div className={notificationStyles.notification}>
                <img
                    onClick={closeNotification}
                    className={notificationStyles.xmark}
                    src="../../xmark.png"
                />
                <div className={notificationStyles.message}>
                    <img
                        className={notificationStyles.tickmark}
                        src="../../tick-mark.png"
                    />
                    <p className={notificationStyles.text}>
                        You entered Supper Raffle
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ToastNotification
