import "./ComposeModal.css";

const ComposeModal = ({onClickedClose, onSendEmail}) => {
    return (
        <div>
            <div className={"compose-header"}>
                <h2>New Email </h2>
                <button
                    className={"compose-close-button"}
                    onClick={() => onClickedClose()}>
                    X
                </button>
            </div>
            <form onSubmit={(event) => onSendEmail(event)}>
                <div className={"compose-data-row"}>
                    <label>
                        To:
                        <input type={"text"} name={"recipient"}/>
                    </label>
                    <label>
                        Subject:
                        <input className={"compose-submit"} type={"text"} name={"subject"}/>
                    </label>
                </div>
                <br/>
                <br/>
                <label>
                    <input className={"compose-message"} type={"text"} name={"message"}/>
                </label>
                <br/>
                <input type={"submit"} value={"send"} className={"send-button"}  />
            </form>
        </div>
    )
}

export default ComposeModal;