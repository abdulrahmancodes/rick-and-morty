import React, { useState } from "react";
import Layout from '../components/layout';
import Characters from '../components/characters';
import Pagination from '../components/pagination';
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from 'prop-types';
import AppContext from '../context/app-context';
import { request, gql } from 'graphql-request'


const Home = ({ data }) => {
  let charactersArray = data.RickAndMorty.characters.results;
  const [filteredCharacters, setFilteredCharacters] = useState(charactersArray);
  const isHome = true;

  const endPoint = 'https://rickandmortyapi.com/graphql';
    const query = gql`
    query filteredCharacters($name: String) {
      RickAndMorty {
        characters(filter: {name: $name}) {
          results {
            name
          }
        }
      }
    }
`

    const variables = {
      name: "morty"
    }
    request(endPoint, query, variables).then(data => console.log(data))


  const handleSearch = async (e) => {
    setFilteredCharacters(charactersArray.filter(char => char.name.toLowerCase().includes(e.target.value)))
  }


  return (
    <AppContext.Provider value={{ handleSearch }} >
      <Layout heading={null}>
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