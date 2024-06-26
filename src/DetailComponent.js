import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./DetailComponent.css"
import { Col, Row } from 'react-bootstrap';

function DetailComponent() {
    const { asset, id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${asset}/${id}?api_key=4a28dff8e62c17516b7cca46db33367a`)
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(error => console.error('Error fetching movie details:', error));
    }, [asset, id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className='content'>
            <h2>{movie.original_title}</h2>
            <Row className='detail'>
                <Col md={2}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster" />
                </Col>
                <Col md={2}>
                    <h1>Description</h1>
                    {movie.overview}
                </Col>
            </Row>
        </div>
    );
}

export default DetailComponent;