import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';





class Address extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      };
    };

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
    }
    






    render() {
       
    
        return (
            <div>
                <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                <TextField required id="standard-required" label="unit/no" name="number" />
                <br/>
                
                    <div id="new-address"></div>
                    <br/>
                <TextField
                    name="street"
                    label="Street Name"
                    type="text"
                    autoComplete=""
                    onChange={this.handleChange}
                />
        <br/>
                <TextField
                    name="suburb"
                    label="Suburb/City"
                    type="text"
                    onChange={this.handleChange}
                />
        <br/>
                <TextField
                    name="region"
                    label="State"
                    type="text"
                    defaultValue="NSW"
                    onChange={this.handleChange}
                />
        <br/>
                <TextField
                    name="country"
                    label="Country"
                    type="text"
                    defaultValue="Australia"
                    onChange={this.handleChange}
                />
        <br/>

                    {/* <label>Unit/House No</label>
                    <input 
                        type="text"
                        name="number"
                        onChange={this.handleChange}
                    /> */}
        {/* <br/>
                    <label>Street Name</label>
                    <input 
                        type="text"
                        name="street"
                        onChange={this.handleChange}
                    />
        <br/>
                    <label>Suburb/City</label>
                    <input 
                        type="text"
                        name="suburb"
                        onChange={this.handleChange}
                    />
        <br/>
                    <label>State</label>
                    <input 
                        type="text"
                        name="region"
                        onChange={this.handleChange}
                    /> */}
        <br/>

                     <Fab type="submit">
                    <NavigationIcon  />   
                    </Fab>

                </form>
                
            </div>
        )
    }
}

export default Address;
