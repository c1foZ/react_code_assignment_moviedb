import React from 'react';
import Card from "./CardComponent"
import { Link } from 'react-router-dom';


function HomeComponent() {
    return (
        <div>
            <div className="title">
                <h1>Popular movies</h1>
                <Card asset={'movie'} type={'popular'} />
                <h1>Popular series</h1>
                <Card asset={'tv'} type={'popular'} />
                <h1>Family</h1>
                <Card asset={'movie'} type={'popular'} genreId={10751} />
                <h1>Documentary</h1>
                <Card asset={'movie'} type={'popular'} genreId={99} />
            </div>
            <div>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}

export default HomeComponent;