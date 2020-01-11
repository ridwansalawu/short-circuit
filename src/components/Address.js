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
          number:"",
          street:"",
          suburb: "",
          region: "",
          country: ""
      };
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const post = {
            number: this.state.number,
            street:this.state.street,
            suburb: this.state.suburb,
            region: this.state.region,
            country: this.state.country
        }

        fetch ('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"

            },
            body: JSON.stringify(post)
        }
             )
             .then(res => res.json())
             .then(data => console.log(data))







        console.log("submitted")
    }
    






    render() {
       
    
        return (
            <div>
                <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                <TextField 
                required 
                id="standard-required" 
                label="unit/no" 
                name="number" 
                onChange={this.handleChange}
                value={this.state.number}
                />
                <br/>
                
                    <div id="new-address"></div>
                    <br/>
                <TextField
                    name="street"
                    label="Street Name"
                    type="text"
                    autoComplete=""
                    onChange={this.handleChange}
                    value={this.state.street}
                />
        <br/>
                <TextField
                    name="suburb"
                    label="Suburb/City"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.suburb}
                />
        <br/>
                <TextField
                    name="region"
                    label="State"
                    type="text"
                    defaultValue="NSW"
                    onChange={this.handleChange}
                    value={this.state.region}
                />
        <br/>
                <TextField
                    name="country"
                    label="Country"
                    type="text"
                    defaultValue="Australia"
                    onChange={this.handleChange}
                    value={this.state.country}
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
