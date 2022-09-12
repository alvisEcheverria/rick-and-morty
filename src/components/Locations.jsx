import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilterInput from './FilterInput';
import LocationsSearch from './LocationsSearch';
import ResidentInfo from './ResidentInfo';
import Pagination from './Pagination';


const Locations = () => {

    const [location, setLocation] = useState([])
        const [locationPerName, setLocationPerName] = useState([])
            const randomLocation = Math.floor(Math.random() * 126) +1
                const [nameLocation, setNameLocation] = useState('')
                
    useEffect(() => {

        if(location.length === 0){
            axios.get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
                .then(res => setLocation(res.data))
        }
        else if(nameLocation != ''){
              
            axios.get(`https://rickandmortyapi.com/api/location/?name=${nameLocation}`)
                .then(res => setLocationPerName(res.data))
        }

    }, [nameLocation])

 
    //*************** PAGINATION *************************

    const [currentPage, setCurrentPage] = useState(1)
        const [postsPerPage]= useState(16)

    //********** GET CURRENT POSTS **********************

            const indexOfLastPost = currentPage * postsPerPage
                const indexOfFirstPost = indexOfLastPost - postsPerPage
                    const currentPosts = location.residents?.slice(indexOfFirstPost, indexOfLastPost)
    
    //*********** CHANGE PAGE ***************************

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    //**********************************************************

    return (

        <div onClick={() => setNameLocation('')}>

            <FilterInput nameLocation={nameLocation} setNameLocation={setNameLocation}/>
        
            <div className='info-container'>

                {nameLocation === '' ? null : <LocationsSearch location={locationPerName} setLocation={setLocation} setNameLocation={setNameLocation}/>}
                
                <div className='description-location-container'>
                    <img class='slime-location' src="../img/slime-rick.png" alt="" />
                    <h1>{location?.name}</h1>
                    <ul>
                        <div className='description-location'>
                            <li className='font-description'>Type <span className='separator'> | </span> <span className='font-description-location'>{location?.type}</span> </li>
                            <li className='font-description'>Dimension <span className='separator'> | </span> <span className='font-description-location'>{location.dimension}</span></li>
                            <li className='font-description'>Population <span className='separator'> | </span> <span className='font-description-location'>{location.residents?.length}</span></li>
                        </div>
                    </ul>
                </div>

                <div className='rick-portal-container'>
                    <img src={location.residents?.length === 0 ? './img/RickAndMortyPortal.png' : null} alt="" className='rick-portal'/>
                </div>
            
                <ul className='residents-container'>
                    { 
                        currentPosts?.map(resident => (
                            <ResidentInfo url={resident} key={resident}/>
                        ))
                    }
                </ul>

                <Pagination postsPerPage={postsPerPage} totalPosts={location.residents?.length} paginate={paginate}/>
           
            </div>  
        </div>
    );
};

export default Locations;