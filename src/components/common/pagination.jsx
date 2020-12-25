import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types'

const Pagination = props => {

    const {itemsCount, pageSize, currentPage, onPageChange} = props;
    // console.log(currentPage)
    
    const pagesCount=Math.ceil(itemsCount/pageSize)
    if(pagesCount===1) return null;
    const pages=_.range(1,pagesCount+1)

    return ( 
    <nav aria-label="Page navigation example">
        <ul className="pagination">
            {pages.map(pg=>
                <li key={pg} className={pg===currentPage?"page-item active":"page-item"} onClick={()=>onPageChange(pg)}><a className="page-link">{pg}</a></li>
                )}
        </ul>
  </nav>);
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired
}
 
export default Pagination;