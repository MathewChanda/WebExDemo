import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./NewMeetingForm.css"
class NewMeetingForm extends React.Component {

  constructor(props){
      super()
      this.state = {
          startDate: "", 
          endDate: "", 
          isCohost : true, 
          enabledAutoRecordMeeting : true, 
          allowAnyUserToBeCoHost : true
      }
  }

  sendForm(){

  }

  addUser(){
      
  }

  render() {
    return (
     <div>
          <form>
            <h1>Please complete form to create meeting</h1>
            <p>Enter the meeting's title:</p>
            <input type="text" />
            <p>Start Date: </p>
            <DatePicker selected={new Date()} dateFormat="MMM d, yyyy h:mm aa" showTimeSelect onChange={date => this.setState({startDate : date})} />
            <p>End Date: </p>
            <DatePicker selected={new Date()} dateFormat="MMM d, yyyy h:mm aa" showTimeSelect onChange={date => this.setState({endDate : date})} />
            <br/>
            <label>
                <input type="checkbox" value={this.state.enabledAutoRecordMeeting} checked={this.state.enabledAutoRecordMeeting} onChange={() => this.setState({enabledAutoRecordMeeting : !this.state.enabledAutoRecordMeeting})}/>
                Enabled Auto Record Meeting
            </label>
            <br/>
            <label>
                <input type="checkbox" value={this.state.allowAnyUserToBeCoHost} checked={this.state.allowAnyUserToBeCoHost} onChange={() => this.setState({allowAnyUserToBeCoHost : !this.state.allowAnyUserToBeCoHost})} />
                Allow Any User To Be CoHost
            </label>
            <div id={"addUserStyleDiv"}>
                <p>Enter the invitees's name:</p>
                <input type="text" />
                <p>Enter the invitees's email:</p>
                <input type="text" />
                <label>
                    <input type="checkbox" value={this.state.isCohost} checked={this.state.isCohost} onChange={() => this.setState({isCohost : !this.state.isCohost})} />
                    CoHost at the beginning 
                </label>
                <button>Add user</button>
            </div>
            <div>
            </div>
            <button id="buttonStyle">Create meeting</button>
        </form>
     </div>
    );
  }
}

export default NewMeetingForm 