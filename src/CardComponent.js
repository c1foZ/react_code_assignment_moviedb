/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './CardComponent.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function CardComponent({ asset, type, genreId }) {
    const numCards = 10;
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${asset}/${type}?api_key=4a28dff8e62c17516b7cca46db33367a&with_genres=${genreId}`)
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movie data:', error));
    }, [asset, genreId, type]);
    const generateCards = () => {
        if (movies.length === 0) {
            return null;
        }
        const cards = [];
        for (let i = 0; i < numCards; i++) {
            const title = asset === 'tv' ? movies.results[i].original_name : movies.results[i].original_title;
            cards.push(
                <Col md={1} key={i}>
                    <Link to={`/${asset}/${movies.results[i].id}`} style={{ textDecoration: 'none' }}>
                        <Card style={{ height: '73%', cursor: 'pointer' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movies.results[i].poster_path}`} alt="Card Image" />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            )
        }
        return cards
    }
    return (
        <Row>
            {generateCards()}
        </Row>
    )
}

export default CardComponent;