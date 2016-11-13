import React from 'react';
import Celsius from './Celsius';
import Fahrenheit from './Fahrenheit';
import BoilOrNot from './BoilOrNot';

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            c : 0,
            f : 0
        };
        this.handleInputCelsius = this.handleInputCelsius.bind(this);
        this.handleInputFahrenheit = this.handleInputFahrenheit.bind(this);

    }



    handleInputCelsius(e){
        //console.log("input Celsius");
        //console.log(e.target.value);
        let convertedFahrenheit = ((e.target.value * 1.8)+32).toFixed(2);

        this.setState({
            c : e.target.value,
            f : convertedFahrenheit
        });
    }

    handleInputFahrenheit(e){
        //console.log("input Fahrenheit");
        //console.log(e.target.value);
        let convertedCelsius = ((e.target.value - 32)/1.8).toFixed(2);

        this.setState({
            c : convertedCelsius,
            f : e.target.value
        });
    }

    render(){

        return (
            <div>
                <h1>Celsius To Fahrenheit Calculator</h1>
                <Celsius c = {this.state.c}
                        onChange = {this.handleInputCelsius}
                        />
                <Fahrenheit f = {this.state.f}
                        onChange = {this.handleInputFahrenheit}
                        />
                <hr/>
                <BoilOrNot c = {this.state.c}/>
            </div>
        );
    }
}

export default App;
