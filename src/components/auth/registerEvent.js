import React from 'react' 
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';

export default class RegisterEvent extends React.Component {

    state = {
        step:1,
        team_name: "",
        email : '',
        team_members_count : '',
        phone_no : '',
        whatsapp_no : '',
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      }


      eventLists = [
        {value: 'Strigrays League - Gaming Jam' , regFee : 200},
        {value : 'Battle Of The Ice - Gaming Tournment' , regFee : 200},
        {value : 'Zh3r0-Capture the Flag' , regFee : 150},
        {value : 'Code Wars - Coding Tournment' , regFee : 250},
        {value : 'Platonic' , regFee : 180},
        {value : 'Bidders Coding Camp' , regFee : 220},
        {value : 'BotBattleBash B3' ,regFee : 130},
        {value : 'ML-XLR8' , regFee : 100},
        {value : 'AI Escape Room' , regFee : 160},
        {value :'Colay' , regFee : 180},
        {value : 'Dare to be Different (Ideathon)' , regFee : 280},
        {value : 'Forensics Investigation Challenges' , regFee : 220},
        
      ];



    render(){
        const { step } = this.state;
        const { team_name , team_leader , team_members_count , phone_no , whatsapp_no , email , college_name  } = this.state;
        const values = { team_name , team_leader , email, team_members_count , phone_no , whatsapp_no  }

        switch (step) {
            case 1: 
              return (
                <Step1 
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                
                />
              )
            case 2: 
              return (
                <Step2 
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    prevStep = {this.prevStep}
                />
              )
            case 3: 
              return (
                <Step3 
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    prevStep = {this.prevStep}
                />
              )
            case 4:
              return (
                // <Success />
                <div></div>
            )
            // never forget the default case, otherwise VS code would be mad!
            default: 
                
               // do nothing
          }


        return (
            <div>
                <h1>Register Event</h1>
            </div>
        );
    }
}