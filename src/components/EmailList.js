import "./EmailList.css";
import Email from "./Email";
import React from "react";


const EmailList = ({emails, onClickedEmail, onClickedCompose, onFiltered}) => {

    const emailList = emails.map(email => {
        return <Email key={email.id} email={email} onClickedEmail={onClickedEmail}/>
    })

    return (
        <>
            <div className={"inbox-header"}>
                <h1>Inbox</h1>
                <button className={"compose"} onClick={() => onClickedCompose()}>
                    +
                </button>
            </div>
            <div className={"search-bar"}>
                <h3>Search</h3>
                <input type={"text"} onKeyPress={(event) => onFiltered(event)}/>
            </div>
            <div className={"main-email-list"}>
                {emailList}
            </div>
        </>
    )
}

export default EmailList;