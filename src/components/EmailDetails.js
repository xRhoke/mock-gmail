import "./EmailDetails.css"

const EmailDetails = ({email}) => {
    const dateString = new Date(email.date).toLocaleDateString();

    return (
        <div className={"main-email-details"}>
            <h2>{email.subject}</h2>
            <p>From: {email.sender}</p>
            <p>{dateString}</p>
            <p className={"message-body"}>{email.message}</p>
        </div>
    )
}

export default EmailDetails;