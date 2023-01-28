import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='page-number-container'>
                {
                    pageNumbers.map(number =>(

                        <a href="#info-container"><li onClick={()=> paginate(number)}  key={number} className='page-number'>
                           {number}
                        </li></a>
                        
                    ))
                }
            </ul>
        </nav>
    );
};

export default Pagination;
