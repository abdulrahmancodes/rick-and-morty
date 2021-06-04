import React from 'react';
import { Link } from 'gatsby';
import './pagination.scss';
import PropTypes from 'prop-types'; 

const Pagination = ({pathname, isHome}) => {
    let paginationRange = [];
    const arr = pathname && pathname.split("/");
    const currentPage = arr && arr[arr.length - 1];
    console.log(arr, currentPage)
    const paginationFirstItem = (currentPage > 5) ? (currentPage - 5) : 1;
    const paginationLastItem = (currentPage < 28) ? (+currentPage + 5) : 34;

    for(let i = 1; i < 34; i++) {
        console.log(i)
        paginationRange.push(i);           
    }

    return (
        <div className="pagination">
            <Link to={`/pages/${currentPage - 1}`} ><span className={`pagination__item ${(currentPage == 1 || isHome) && 'pagination__item--disable' } `}>&laquo;</span></Link>
            <Link to='/pages/1' ><span className="pagination__item" >1</span></Link>
            { currentPage > 6 && <span className="pagination__item" >...</span>}
            {currentPage && paginationRange.slice(paginationFirstItem, paginationLastItem).map(number => <Link to={`/pages/${number}`} key={number} ><span className={`pagination__item ${( currentPage == number || (isHome && number == 1 )  )  && 'pagination__item--active' }`} >{number}</span></Link>)}
            { !currentPage && paginationRange.slice(1, 9).map(number => <Link to={`/pages/${number}`} key={number} ><span className={`pagination__item ${( currentPage == number || (isHome && number == 1 )  )  && 'pagination__item--active' }`} >{number}</span></Link>) }
            {(currentPage < 28 || isHome ) && <span className="pagination__item" >...</span>}
            <Link to='/pages/34' ><span className="pagination__item" >34</span></Link>
            <Link to={`/pages/${+currentPage + 1}`} ><span className={`pagination__item ${(currentPage == 34) && 'pagination__item--disable' } `}>&raquo;</span></Link>
        </div>
    )

}

Pagination.propTypes = {
    pathname: PropTypes.string,
    isHome: PropTypes.bool
}


export default Pagination;