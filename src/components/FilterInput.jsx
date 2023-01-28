import React from 'react';
import LocationsSearch from './LocationsSearch';

const FilterInput = ({nameLocation, setNameLocation, locationPerName, setLocation, dimensionLocations}) => {
    
    const dimension = (local) =>{
        dimensionLocations(local)
    }

    return (
        <header>
            <div className='img-header-content'>
                <img src="../img/RickAndMortyHeader.jpg" alt="rick-and-morty" />
            </div>
            <nav className='main-nav'>
                <a href="../index.html"><img className='rick-and-morty-logo' src="../img/RickAndMortyLogo.png" alt="" /></a>
                <form className='search-container'>
                    <input className='search-input'
                    type="text"
                    value={nameLocation}
                    onChange={e => setNameLocation(e.target.value)}
                    placeholder='Search Location'
                    />
                    {nameLocation === '' ? null : <div><LocationsSearch dimension={dimension} location={locationPerName} setLocation={setLocation} setNameLocation={setNameLocation}/></div>}
                </form>
            </nav>
            
        </header>
    );
};

export default FilterInput;