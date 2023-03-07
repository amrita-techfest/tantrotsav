import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {Button} from '@mui/material';
import TextField from '@mui/material/TextField';

export default class Step2 extends Component {
  
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    


  render() {
    const { values, handleChange } = this.props;
    const rows = [];
    return (
      <div className='bg-white my-5 w-[70%] mx-auto rounded-[20px] p-3 flex flex-col'>
           <TextField 
                placeholder='College Name'
                label='College Name'
                onChange={handleChange('college_name')}
                className='m-2'
           />
           <TextField 
                placeholder='Team Members Count'
                label='Team Members Count'
                onChange={handleChange('team_members_count')}
                className='m-2'
           />
           {
            values.team_members_count > 0 
            ? (
                <div className='flex flex-col'>
                    <h1 className='p-2 '>Team member Names</h1>
                    { Array.from({
                        length: values.team_members_count},
                        () => 
                        <div>
                            <TextField className='m-2 w-full' placeholder='Name'/>
                        </div>
                    )}
                </div>
            )
            : <h1 className='p-2'>0-team members selected</h1>
           }
            <div className='flex'>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={this.back}
                    className='w-[170px] mx-auto my-3'
                >Previous
                </Button>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={this.continue}
                    className='w-[170px] mx-auto my-3'
                >Continue
                </Button>
            </div>
      </div>
    )
  }
}
