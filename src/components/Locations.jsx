import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilterInput from './FilterInput';
import ResidentInfoList from './ResidentInfoList';
import Pagination from './Pagination';
import Footer from './Footer'



const Locations = () => {

    const [location, setLocation] = useState([])
        const [locationPerName, setLocationPerName] = useState([])
            const randomLocation = Math.floor(Math.random() * 126) + 1
                const [nameLocation, setNameLocation] = useState('')
                    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        if (location.length === 0) {
            axios.get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
                .then(res => setLocation(res.data))
                    .finally(()=> setIsLoading(false))
        }
        else if (nameLocation != '') {

            axios.get(`https://rickandmortyapi.com/api/location/?name=${nameLocation}`)
                .then(res => setLocationPerName(res.data))
        }

    }, [nameLocation])

    //*************** PAGINATION *************************

    const [currentPage, setCurrentPage] = useState(1)
        const [postsPerPage] = useState(16)

    //********** GET CURRENT POSTS **********************

    const indexOfLastPost = currentPage * postsPerPage
        const indexOfFirstPost = indexOfLastPost - postsPerPage
            const currentPosts = location.residents?.slice(indexOfFirstPost, indexOfLastPost)

    //*********** CHANGE PAGE ***************************

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    //**********************************************************

    const dimensionLocations = (local) =>{
        setLocation(local)
    }

    return (
        <div onClick={() => setNameLocation('')}>

            {isLoading ?
                (   
                    <div className='loading-screen'>
                        <img src="./img/rick-and-morty-loading.gif" alt="" />
                    </div>
                ):(
                <div>
                    <FilterInput dimensionLocations={dimensionLocations} nameLocation={nameLocation} setNameLocation={setNameLocation} locationPerName={locationPerName}/>
                    <div className='info-container'>
                        <div className='description-location-container'>
                            <img class='slime-location' src="../img/slime-rick.png" alt="" />
                            <h1>{location?.name}</h1>
                            <ul>
                                <div className='description-location'>
                                    <li className='font-description-location'><span className='font-description'>Type </span>{location?.type}</li>
                                    <li className='font-description-location'><span className='font-description'>Dimension </span>{location.dimension} </li>
                                    <li className='font-description-location'><span className='font-description'>Population </span>{location.residents?.length}</li>
                                </div>
                            </ul>
                        </div>

                        <div className='rick-portal-container'>
                            <img src={location.residents?.length === 0 ? './img/RickAndMortyPortal.png' : null} alt="" className='rick-portal'/>
                        </div>
                        
                        <ResidentInfoList currentPosts={currentPosts}/>

                        <Pagination postsPerPage={postsPerPage} totalPosts={location.residents?.length} paginate={paginate}/>
              
                    </div>

                <Footer/>
                </div> 
            )}
        </div>
    );
};

export default Locations;