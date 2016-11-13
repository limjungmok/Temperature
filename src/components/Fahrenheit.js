import React, { Component, PropTypes } from 'react';

class Fahrenheit extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                Fahrenheit : <input type="text"
                                    placeholder="화씨를 입력하세요"
                                    value = {this.props.f}
                                    onChange = {this.props.onChange}
                                    />
            </div>
        );
    }
}

export default Fahrenheit;
