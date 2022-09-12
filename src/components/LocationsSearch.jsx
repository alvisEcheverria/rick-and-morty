import React from 'react';

const LocationsSearch = ({location, setLocation, setNameLocation}) => {

    return (
        
        <div>
           <ul className='info-search-container'>
                {

                    location.results?.map(local =>(

                        <li className='search-location'  onClick={() => {setLocation(local), setNameLocation('')}} key={local.name}>{local.name}</li>

                    ))

                }
            </ul>
           
        </div>
    );
};

export default LocationsSearch;