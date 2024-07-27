import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <div className="main-page">
            <h1>Email Sending App</h1>
            <h2>Main Page</h2>


            <Link to="/letters"><button className="op-button">Go to Letters</button></Link>
            <Link to="/users"><button className="op-button">Go to Users</button></Link>

        </div>
    );
}

export default MainPage;