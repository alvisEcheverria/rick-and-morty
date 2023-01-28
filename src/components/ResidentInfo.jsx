import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({url}) => {

    const [residentInfo, setResidentInfo] = useState({})
        const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        
        axios.get(url)
            .then(res => setResidentInfo(res.data))
                .finally(()=> setIsLoading(false))

    }, [])

    const changeStatus = () =>{

        if(residentInfo.status === 'Alive'){
            return '#2ca50c'
        }

        if(residentInfo.status === 'Dead'){
            return  'rgb(210, 69, 69)'
        }
        else{
            return 'gray'
        }
    }

    return (
        <div className='resident-item'>
            {
            isLoading? 
                (   
                    <div className='loading-resident-container'>
                       <img className='loading-resident' src="./img/rick-and-morty-loading-resident.gif" alt="loading-rick" /> 
                    </div>
                    
                ):(
                <>
                    <div className='resident-card'>
                        <div className='item-a'>
                            <img className='img-resident' src={residentInfo.image} alt="character" />
                            <div className='resident-name-content'>
                                <h2 className='resident-name-mobile'>
                                    {residentInfo?.name}
                                </h2>
                            </div>
                        </div>
                        <div className='item-b'>
                            <h2 className='resident-name'>
                                {residentInfo?.name}
                            </h2>
                            <p className='status' style={{color: changeStatus()}}>{residentInfo.status}</p>
                            <p><span className='resident-description'>Origin</span>{residentInfo.origin?.name}</p>
                            <p><span className='resident-description'>Specie </span>{residentInfo.species}</p>
                            <p><span className='resident-description'>Episodes where appear </span>{residentInfo.episode?.length}</p>  
                        </div>
                    </div>
                </>
            )} 
        </div>
    );
};

export default ResidentInfo;
