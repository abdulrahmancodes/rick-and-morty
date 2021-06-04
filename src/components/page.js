import React, { useState } from "react";
import Layout from '../components/layout';
import Characters from '../components/characters';
import Pagination from '../components/pagination';
import { graphql } from "gatsby";
import PropTypes from 'prop-types';
import AppContext from '../context/app-context';



const Page = ({ location, data }) => {
    const charactersArray = data.RickAndMorty.characters.results;
    const [filteredCharacters, setFilteredCharacters] = useState(charactersArray);


    const handleSearch = (e) => {
        setFilteredCharacters(charactersArray.filter(char => char.name.toLowerCase().includes(e.target.value)))
    }
    return (
        <AppContext.Provider  value={{ handleSearch }}>
            <Layout heading={null} >
                <Characters charactersArray={filteredCharacters} />
                <Pagination pathname={location.pathname} />
            </Layout>
        </AppContext.Provider>
    )
}



export const query = graphql`
    query CharacterPages($page: Int) {
        RickAndMorty {
        characters(page: $page) {
            results {
            name
            image
            id
            }
        }
        }
    }     
`

Page.propTypes = {
    location: PropTypes.object,
    data: PropTypes.object
}

export default Page;