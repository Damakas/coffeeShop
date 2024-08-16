import Card from 'react-bootstrap/Card';
import React from 'react';
import './cards.css';

function AddCards(props) {
    const { name, price, src, alt, coffeeCountry } = props;

    return (
        <div className='card-info'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={src} alt={alt} />
                <Card.Body>
                    <Card.Title> {name}</Card.Title>
                    <Card.Text className='card-country'>
                        {coffeeCountry}
                    </Card.Text>
                    <Card.Text className='card-price'>
                        {price + "$"}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
}

export default AddCards;