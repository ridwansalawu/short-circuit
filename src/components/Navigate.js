import React, { Component } from 'react';
import Axios from "axios";

class Navigate extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         gif:""
      };
    };
    

    componentDidMount () {
        Axios("https://api.giphy.com/v1/gifs/random?api_key=mz1hTDVp0QqZL9l4gSU4MShvXOLPLIx7&tag=dog&rating=G")
            .then(response => {

                this.setState({gif:response.data.data.image_original_url})
                console.log(response.data.data.image_original_url)

            })
    }







    render() {
        return (
            <div>
                <h1>Navigation Gifs</h1>
                <img src={this.state.gif} alt="giphy" sizes="(max-width: 600px) 200px, 50vw"/>

            </div>
        )
    }
}

export default Navigate;
