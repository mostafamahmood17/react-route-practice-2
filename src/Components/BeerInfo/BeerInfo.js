import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
const BeerInfo = () => {
    const [detail , setDetail] = useState({});
    useEffect(() => {
        fetch(`https://api.punkapi.com/v2/beers/${id}`)
        .then(res => res.json())
        .then(data => setDetail(data[0]))
        .catch(err => console.log(err))
    }, [])
    const {id} = useParams();
    return (
        <div>
            {detail.name && (<>
            {/* <h1>Beer Details : {detail.name}</h1>
            <h2>Country : {detail.tagline}</h2>
           <h3>Description: {detail.description}</h3>
           <img src={detail.image_url} alt=""/> */}
             <div class="card container p-4">
               <img src={detail.image_url} style={{width : "10rem", height: "20rem"}} className="card-img-top img-fluid" alt="..."/>
              <div className="card-body">
               <h5 className="card-title">Beer Details : {detail.name}</h5>
               <h5 className="card-title">Beer tagline : {detail.tagline}</h5>
                <p className="card-text">{detail.description}</p>
                
       
                </div>
                </div>
           
           </>
            )}
           
        
           
           
            
        </div>
    );
};

export default BeerInfo;