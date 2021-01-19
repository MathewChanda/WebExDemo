import React from 'react'
import Select from 'react-select';
import "./WebexPage.css"



class WebexPage extends React.Component{
    constructor(){
        super()
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const authCode = params.get('code');
        this.state = {
            authCode : authCode, 
            clientId : "C17879dfe79bfd7ef3deb1f4f0229e42d8688ffc82e6ad74ec2c7efa71de41f8e", 
            clientSecret : "08493ec0197561f20f1155c9d43e8ff044570c273381e6fcf5a73045932db1cd", 
            redirectUri : "http://localhost:3000/webex", 
            accessToken :"",
            meetings: [], 
            options : [{ value: "Loading...", label: "Loading..."}]
        }

        this.getMeetings = this.getMeetings.bind(this)
    }

    componentDidMount(){
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const authCode = params.get('code');

        this.setState({authCode: authCode})
        fetch('https://webexapis.com/v1/access_token', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded', 
            },
            body: new URLSearchParams({
                grant_type: "authorization_code",
                client_id : this.state.clientId, 
                client_secret : this.state.clientSecret, 
                code : this.state.authCode, 
                redirect_uri : this.state.redirectUri
            })
        }).then(response => response.json())
        .then(json => {
            this.setState({accessToken : json["access_token"]})
            this.getMeetings()
        })
        .catch(error => console.log(error))
    }

    handleChange = selectedOption => {
        this.setState(
          { selectedOption },
          () => console.log(`Option selected:`, this.state.selectedOption)
        );
      };

    getMeetings(){ 
        console.log(this.state.accessToken)
        fetch("https://webexapis.com/v1/meetings",{
            method: 'GET',
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded', 
                authorization : `Bearer ${this.state.accessToken}`
            }
        },{credentials: "same-origin"})
        .then(response => response.json())
        .then(json => this.setState({meetings : json["items"]}))
        .then(() => {
            const options = this.state.meetings.map(meeting => ({ value: meeting.id, label: meeting.title }));
            this.setState({options: options})
        })
        .then(() => console.log(this.state))
    }

    render(){
        return(
        <div>
            <div id="titleStyle"> 
                <h1>Please Select a meeting to join</h1>
            </div>
                <Select
                    defaultValue={"Please select"}
                    onChange={this.handleChange}
                    options={this.state.options}
                />
            <div id="buttonStyle"> 
               <button>Start Meeting</button>
            </div>
        </div>)
    }
}

export default WebexPage; 