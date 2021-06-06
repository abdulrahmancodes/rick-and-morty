import React from "react"
import "./pagination.scss"
import PropTypes from "prop-types"

const Pagination = ({
  pageCount,
  handlePageChange,
  currentPage,
}) => {
  let paginationRange = []

  for (let i = 1; i <= pageCount; i++) {
    paginationRange.push(i)
  }

  const paginationFirstItem = currentPage > 2 ? currentPage - 3 : 0
  const paginationLastItem =
    currentPage < paginationRange.length - 2 && paginationRange.length > 7
      ? +currentPage + 2
      : paginationRange.length

  return (
    <div>
      {pageCount > 1 && (
        <div className="pagination">
          <span
            className={`pagination__item ${
              currentPage == 1 && "pagination__item--disable"
            }`}
            onClick={handlePageChange}
          >
            &laquo;
          </span>
          {currentPage > 3 && (
            <span className="pagination__item" onClick={handlePageChange}>
              1
            </span>
          )}
          {currentPage > 5 && <span className="pagination__item">...</span>}
          {paginationRange
            .slice(paginationFirstItem, paginationLastItem)
            .map(id => (
              <span
                className={`pagination__item ${
                  currentPage == id && "pagination__item--active"
                } `}
                key={id}
                onClick={handlePageChange}
              >
                {id}
              </span>
            ))}
          {currentPage < paginationRange.length - 5 && (
            <span className="pagination__item">...</span>
          )}
          {currentPage < paginationRange.length - 3 && (
            <span className="pagination__item" onClick={handlePageChange}>
              {paginationRange.length}
            </span>
          )}
          <span
            className={`pagination__item ${
              currentPage == pageCount && "pagination__item--disable"
            } `}
            onClick={handlePageChange}
          >
            &raquo;
          </span>
        </div>
      )}
    </div>
  )
}

Pagination.propTypes = {
    pageCount: PropTypes.number,
    handlePageChange: PropTypes.func,
    currentPage: PropTypes.number,
}

export default Pagination
