import React from 'react';
import './NumBar.css';


class NumBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Introduce el valor de X'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value}); //maneja el valor que va a ser pasado a la funcion
    }


    handleSubmit(event) {
        event.preventDefault();

    }

    render() {
        return (
            <form className='formulario' onSubmit={this.handleSubmit}>
                <label className='form-container'> 
                    <input type='text' value={this.state.value} onChange={this.handleChange} />
                    <input type='submit' value='Calcular' onClick={() => this.props.onClick(this.state.value)}/>
                </label>
            </form>
           
        )
    }
}

export default NumBar;