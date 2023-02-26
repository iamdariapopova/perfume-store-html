import React, {Component} from "react";
import './StoreButton.css'

class StoreButton extends Component {
    state = {
        counter: 0
    }

    handleClick = () => {
        this.setState(({ counter }) => ({
                counter: ++counter
            })
        );
    }

    render() {
        const { counter } = this.state;

        return (
            <button onClick={this.handleClick}>{ counter }</button>
        );
    }
}

export default StoreButton;

