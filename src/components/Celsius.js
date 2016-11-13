import React, { Component, PropTypes } from 'react';

class Celsius extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
              Celsius : <input 
                                placeholder="섭씨를 입력하세요"
                                value = {this.props.c}
                                onChange = {this.props.onChange}
                                />
            </div>
        );
    }
}

export default Celsius;
