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

                        <li onClick={()=> paginate(number)}  key={number} className='page-number'>
                            <a href="!#">{number}</a>
                        </li>
                        
                    ))
                }
            </ul>
        </nav>
    );
};

export default Pagination;