import Card from 'react-bootstrap/Card';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './exemples-cards.css';

function AddCards(props) {
    const navigate = useNavigate();
    const { name, price, src, alt, coffeeCountry } = props;

    const handleCardClick = () => {
        navigate(`/coffee/${name}`)
    }

    return (
        <div className='card-info' onClick={handleCardClick}>
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