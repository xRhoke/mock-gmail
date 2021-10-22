import React from "react";
import './App.css';
import EmailList from "./components/EmailList";
import EmailDetails from "./components/EmailDetails";
import ComposeModal from "./components/ComposeModal";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emails: [],
            currentEmail: {},
            isComposing: false,
        }
    }

    async fetchEmails() {
        const url = "http://localhost:3001/emails";
        const response = await fetch(url);
        const JSONResponse = await response.json();
        this.setState({emails: JSONResponse}, () => {
            console.log(this.state.emails)
        });
        this.setState({currentEmail: JSONResponse[0]});
    }

    async sendEmail(event) {
        const parsedEmail = {
            sender: "jane@galvanize.com",
            recipient: event.target.recipient.value,
            subject: event.target.subject.value,
            message: event.target.message.value,
        }

        const url = "http://localhost:3001/send";
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(parsedEmail),
        });

        const JSONResponse = await response.json();
        return JSONResponse;
    }

    componentDidMount() {
        this.fetchEmails();
    }

    handleClickedEmail(email) {
        this.setState({currentEmail: email});
    }

    handleClickedCompose() {
        console.log("clicked the compose button");
        this.setState({isComposing: true});
    }

    handleClosedCompose() {
        this.setState({isComposing: false});
    }

    async handleSendEmail(event) {
        const parsedEmail = {
            sender: "jane@galvanize.com",
            recipient: event.target.recipient.value,
            subject: event.target.subject.value,
            message: event.target.message.value,
        }

        const url = "http://localhost:3001/send";
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(parsedEmail),
        });

        const JSONResponse = await response.json();
        return JSONResponse;
    }

    async handleFilterEmail(event) {
        if (event.key === "Enter") {
            const url = "http://localhost:3001/search?query=" + event.target.value;
            const response = await fetch(url);
            const JSONResponse = await response.json();

            this.setState({emails: JSONResponse});
            this.setState({currentEmail: JSONResponse[0]});
        }

    }

    render() {
        return (
            <>
                <div className={"header"}>
                    Welcome to GeeMail
                </div>
                <div className={"main"}>
                    <div className={"email-list"}>
                        <EmailList
                            emails={this.state.emails}
                            onClickedEmail={(email) => this.handleClickedEmail(email)}
                            onClickedCompose={() => this.handleClickedCompose()}
                            onFiltered={(event) => this.handleFilterEmail(event)}/>
                    </div>
                    <div className={"email-details"}>
                        <EmailDetails email={this.state.currentEmail}/>
                    </div>
                </div>
                {this.state.isComposing &&
                <div className={"compose-modal"}>
                    <ComposeModal
                        onClickedClose={() => this.handleClosedCompose()}
                        onSendEmail={(event) => this.handleSendEmail(event)}
                    />
                </div>
                }
            </>
        );
    }
}

export default App;
