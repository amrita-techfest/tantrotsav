import React, { Component } from 'react'
import Multiselect from 'multiselect-react-dropdown';
import { Button } from '@mui/material';


export default class Step3 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedOptions : '',
            totalFee : 0,

        }
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
      
    ]

      continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };

      handleOnchangeService = (val) => {
        var array = [];
        for (let i = 0; i < val.length; i++) {
          array = array.concat(val[i].regFee);
    
        }
        // setSelections(array);
        this.setState({selectedOptions : array});
        var sum = array.reduce(function (x, y) {
          return x + y;
        }, 0);
        // setTotalFee(sum);
        this.setState({totalFee : sum});
      };
    
      handleRemoveService = (val) => {
        var array = [...this.state.selectedOptions]; // make a separate copy of the array
        var removearray = [];
        for (let i = 0; i < val.length; i++) {
          removearray = removearray.concat(val[i].regFee);
        }
        var removeddata = array.filter((service) => !removearray.includes(service));
        delete removearray[removeddata];
        this.setState({selectedOptions : removeddata});
        var sum = removearray.reduce(function (x, y) {
          return x + y;
        }, 0);
        // setTotalFee(sum);
        this.setState({totalFee : sum});
      };

  render() {
    
    return (
      <div className='flex flex-col my-5 w-[70%] mx-auto bg-white p-3'>
        <Multiselect 
            options={this.eventLists}
            displayValue="value"
            selectionLimit={this.eventLists.length}
            name="eventListsSelection"
            showArrow={true}
            placeholder="Select Events"
            required
            onSelect={this.handleOnchangeService}
            onRemove={this.handleRemoveService}
        />
        
      <h2 className='py-4'>Total Amount to be paid: {this.state.totalFee}</h2>
      <div className='flex'>
        <Button
            color="primary"
            variant="contained"
            onClick={this.back}
            className='w-[170px] mx-auto my-3'        
        >Previous</Button>
        <Button 
            color="primary"
            variant="contained"
            onClick={this.continue}
            className='w-[170px] mx-auto my-3'         
        >Make Payment</Button>
      </div>
      </div>
    )
  }
}
