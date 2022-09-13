import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentInfoList = ({currentPosts}) => {

    return (

            <ul className='residents-container'>
                { 
                    currentPosts?.map(resident => (
                        <ResidentInfo url={resident} key={resident}/>
                    ))
                }
            </ul>
    );
};

export default ResidentInfoList;