import React from 'react';
import { Card } from 'react-bootstrap';


const Tarjeta = ({ data }) => {
    return (
        <Card className='mt-5 text-center' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.url} />
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default Tarjeta