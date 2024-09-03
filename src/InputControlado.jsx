import React, { Component } from 'react';

class InputControlado extends Component {
    constructor(props) {
        super(props);
        this.state = { texto: '' };
    }

    handleChange = (event) => {
        this.setState({ texto: event.target.value });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.texto}
                    onChange={this.handleChange}
                />
                <p>Texto digitado: {this.state.texto}</p>
            </div>
        );
    }
}

export default InputControlado;