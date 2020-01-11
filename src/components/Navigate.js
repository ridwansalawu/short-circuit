import React, { Component } from 'react';
import Axios from "axios";

class Navigate extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         gif:"",
         animal:""
      };
    };

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({animal: e.target.value})
    }

    changeAnimal = () => {
       this.componentDidMount()

    }
    

    componentDidMount () {
        Axios(`https://api.giphy.com/v1/gifs/random?api_key=mz1hTDVp0QqZL9l4gSU4MShvXOLPLIx7&tag=${this.state.animal}&rating=G`)
            .then(response => {

                this.setState({gif:response.data.data.image_original_url})
                console.log(response.data.data.image_original_url)

            })
    }

    render() {
        return (
            <div>
                <h1>Navigation Gifs</h1>
                <img src={this.state.gif} alt="giphy" sizes="(max-width: 800px) 200px, 50vw"/>

               
                 <br/>
                 <label>animal</label>
                <input type="text" name="animal" onChange={this.handleChange}/> 
                <button onClick={this.changeAnimal}>go</button>

            </div>
        )
    }
}

export default Navigate;
