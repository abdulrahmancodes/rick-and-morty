import React, { useState } from "react";
import Layout from '../components/layout';
import Characters from '../components/characters';
import { graphql } from "gatsby";
import PropTypes from 'prop-types';
import './search.scss'

const Search = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const allCharacters = data.RickAndMorty.charactersByIds;
    const [filteredCharacters, setFilteredCharacters] = useState(allCharacters);
    const numberOfPages = Math.ceil(filteredCharacters.length / 20);
    const pageIds = [];
    for (let i = 1; i <= numberOfPages; i++) {
        pageIds.push(i);
    }

    return (
        <Layout heading="Search any characters from Rick and Morty">
            <div className="search">
                <input type="text" placeholder="Search characters by name" className="search__field" onChange={(e) => setFilteredCharacters(allCharacters.filter(char => char.name.toLowerCase().includes(e.target.value)))} />
                <Characters charactersArray={(filteredCharacters.length != 671) ? filteredCharacters.slice((currentPage - 1)* 20, currentPage*20) : [] } />
                { (numberOfPages > 1 && filteredCharacters.length != 671)
                    &&
                    <div className="search__pagination">
                        <span className={`search__pagination__item ${(currentPage == 1) && 'search__pagination__item--disable' }`} onClick={() => setCurrentPage(currentPage - 1)} >&laquo;</span>
                        {pageIds.map(id => <span className={`search__pagination__item ${(currentPage == id) && 'search__pagination__item--active' } `} key={id} onClick={() => setCurrentPage(id)} >{id}</span>)}
                        <span className={`search__pagination__item ${(currentPage == numberOfPages) && 'search__pagination__item--disable' } `} onClick={() => setCurrentPage(currentPage + 1)} >&raquo;</span>
                    </div> }
            </div>
        </Layout>
    )
}

export const query = graphql`
    query MyQuery($charactersIds: [ID!]!) {
        RickAndMorty {
        charactersByIds(ids: $charactersIds) {
            name
            image
            id
        }
        }
}  
`

Search.propTypes = {
    data: PropTypes.object
}

export default Search;