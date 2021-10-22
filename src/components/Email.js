import './Email.css';

const Email = ({email, onClickedEmail}) => {
    return (
        <div className={"email"} onClick={() => onClickedEmail(email)}>
            <h2>{email.subject}</h2>
            <p>{email.sender}</p>
        </div>
    )
}

export default Email;