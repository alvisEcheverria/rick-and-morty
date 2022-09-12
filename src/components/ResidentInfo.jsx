import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({url}) => {

    const [residentInfo, setResidentInfo] = useState({})

    useEffect(() => {
        
        axios.get(url)
            .then(res => setResidentInfo(res.data))

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
            <div className='resident-card'>

                <li><img className='img-resident' src={residentInfo.image} alt="character" /></li>
                
                <div className='resident-desciption-container'>
                    <div  className='resident-name'>
                        <li>{residentInfo?.name}</li>
                    </div>

                    <li className='status' style={{color: changeStatus()}}>{residentInfo.status}</li>
                    
                    <div className='resident-descriptions'>
                        <li><span className='resident-description'>Origin</span> <span className='separator'> | </span>{residentInfo.origin?.name}</li>
                        <li><span className='resident-description'>Specie</span> <span className='separator'> | </span>{residentInfo.species}</li>
                        <li><span className='resident-description'>Episodes where appear</span> <span className='separator'> | </span> {residentInfo.episode?.length}</li>  
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default ResidentInfo;
