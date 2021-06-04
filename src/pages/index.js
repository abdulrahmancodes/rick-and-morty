import React, { useState } from "react";
import Layout from '../components/layout';
import Characters from '../components/characters';
import Pagination from '../components/pagination';
import { graphql } from "gatsby";
import PropTypes from 'prop-types';
import AppContext from '../context/app-context';


const Home = ({ data }) => {
  let charactersArray = data.RickAndMorty.characters.results;
  const [filteredCharacters, setFilteredCharacters] = useState(charactersArray);
  const isHome = true;

  
  const handleSearch = (e) => {
    console.log(e.target.value, charactersArray)
    setFilteredCharacters(charactersArray.filter(char => char.name.toLowerCase().includes(e.target.value)))
  }

  return (
    <AppContext.Provider value={{ handleSearch }} >
      <Layout heading={null} >
        <Characters charactersArray={filteredCharacters} />
        <Pagination isHome={isHome} />
      </Layout>
    </AppContext.Provider>
  )
}

export const query = graphql`
  query characters {
    RickAndMorty {
    characters {
        results {
        name
        image
        id
        }
    }
    }
  }
`

Home.propTypes = {
  data: PropTypes.object
}

export default Home;