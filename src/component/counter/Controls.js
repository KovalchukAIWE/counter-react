import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Controls = ( {onIncrement, onDecrement} ) => (
    <div>
        <Button variant="success" onClick={onIncrement}>+ 1</Button>{' '}
        <Button variant="danger" onClick={onDecrement}>- 1</Button>
    </div>
)

export default Controls;