import React from 'react'
import "./WebexPage.css"



class WebexPage extends React.Component{
    constructor(){
        super()
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const authCode = params.get('code');
        this.state = {
            authCode : authCode, 
            clientId : "C75b0829a09495f0f00c31e231e3eb162de5f549feadbdb6b645f60ffe6ddb035", 
            clientSecret : "e89ae417fc0ce1def5b8ee3d8dd779507ce909942ed3552fc67d5cfaee9a5a5b", 
            redirectUri : "http://localhost:3000/webex", 
            accessToken :"",
        }
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
            console.log(this.state.accessToken)
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
        <div>
            
        </div>)
    }
}

export default WebexPage; 