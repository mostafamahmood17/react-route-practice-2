import React, { useState, useEffect } from 'react';
import BeerDetail from '../BeerDetail/BeerDetail';

const Beer = () => {
    const [beer , setBeer] = useState([])


    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(data => setBeer(data))
    }, []) 
    
    return (
        <div className="container">
            <h1 className="display-3">Beer count : {beer.length}</h1>
            {
                beer.map(beer => <BeerDetail beer ={beer} key ={beer.id}></BeerDetail>)
            }
             
        </div>
            
       
    );
};

export default Beer;