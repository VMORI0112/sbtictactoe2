import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
       
    return (
        
        <>
        <h1 className="text-center mt-5">WELCOME TO <br/> TIC TAC TOE <br/> GAME </h1>
        <p className="text-center">Don't be scared...</p>
        
        <div className="d-flex justify-content-center">
            <Link to="/titactoe">
                <div className="start">X</div>
            </Link>
        </div>
        <h2 className="text-center">CLICK HERE ↑</h2>
        
            
        </>
    );
};

export default Home;