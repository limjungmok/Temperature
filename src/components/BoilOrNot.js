import React, { Component, PropTypes } from 'react';


class BoilOrNot extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.c);
        const viewForBoil = <div>물이 끓습니다</div>;
        const viewForNotBoil = <div>물이 안끓음</div>;

        const view = this.props.c > 100 ? viewForBoil : viewForNotBoil;
        return(
            <div>{view}</div>
        );
    }
}

export default BoilOrNot;
