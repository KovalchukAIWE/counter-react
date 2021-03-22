import React from 'react';
import Value from './Value'
import Controls from './Controls';
import {Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Counter extends React.Component {

    state = {
        value: this.props.initialValue
    }

    handleIncrement = () => {
        this.setState(prevState => ({
            value: prevState.value + 1,
        }))
    }

    handleDecrement = () => {
        this.setState(prevState => ({
            value: prevState.value - 1,
        }))
    }

    render() {
        return (
            <Container>
            <Row>
            <div>
                <Value value = {this.state.value} />
                  <Controls 
                  onIncrement = {this.handleIncrement}
                  onDecrement = {this.handleDecrement}>
                 </Controls>
            </div>
            </Row>
            </Container>
        )
    }
}


export default Counter;