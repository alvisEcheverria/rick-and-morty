import React from 'react';

const LocationsSearch = ({location, setNameLocation, dimension}) => {


    return (
        <ul className='info-search-container'>
            {
                location.results?.map(local =>(
                    <li className='search-location'  onClick={() => {dimension(local), setNameLocation('')}} key={local.name}>{local.name}</li>
                ))
            }
        </ul>
    );
};

export default LocationsSearch;