import React, { useState } from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    const [ selected, setSelected ] = useState('')
    const [numberPage, setNumberPage] = useState(-1)

    const selectedPage = (number) => {
        paginate(number)
        setNumberPage(number)
        if(number){
            setSelected('selected')
        }
    }

    return (
        <nav>
            <ul className='page-number-container'>
                {
                    pageNumbers.map(number =>(

                        <a href="#info-container"><li onClick={()=> selectedPage(number)}  key={number} className={`page-number ${numberPage === number&& selected}`} >
                           {number}
                        </li></a>
                        
                    ))
                }
            </ul>
        </nav>
    );
};

export default Pagination;
