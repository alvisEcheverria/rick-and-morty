import React from 'react';

const FilterInput = ({nameLocation, setNameLocation}) => {
    return (
        <header>
                <div className='header-img'></div>
                    <nav className='main-nav'>
                        <img className='rick-and-morty-logo' src="../img/RickAndMortyLogo.png" alt="" />
                        <form>
                            <input className='search-input'
                            type="text"
                            value={nameLocation}
                            onChange={e => setNameLocation(e.target.value)}
                            placeholder='Search Location'
                            />
                        </form>
                        
                    </nav>
            </header>
    );
};

export default FilterInput;