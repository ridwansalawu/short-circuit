import React, { Component } from 'react';
import Axios from 'axios';




class Weather extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
          weather:""
         
      };
    };

    componentDidMount() {
        
        Axios("api.openweathermap.org/data/2.5/weather?q=sydney&APPID=bc4f7b4dd7561f35519adc4230be3413")
            .then(response => {
                console.log(response)
            })

    }

    
    render() {
        return (
            <div>
                <code>the weather channel</code>
            </div>
        )
    }
}

export default Weather;
