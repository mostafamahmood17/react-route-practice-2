import React from 'react';
import {Link} from 'react-router-dom'

const BeerDetail = (props) => {
    const {id, name, tagline, description, image_url} = props.beer;

    return (
        <div className="">
            <div class="card w-75 ">
            <div class="card-body">
              <h5 class="card-title">Beer name : {name}</h5>
              <p class="card-text">agline : {tagline}</p>
              <Link className = "btn btn-primary" to = {`/beers/${id}`}> Details of {id}</Link>
            </div>
</div>
             
        </div>
    );
};

export default BeerDetail;