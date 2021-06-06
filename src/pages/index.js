import React, { useState } from "react"
import Layout from "../components/layout"
import Characters from "../components/characters"
import Pagination from "../components/pagination"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import AppContext from "../context/app-context"
import { gql, GraphQLClient } from "graphql-request"
import Loader from "react-loader-spinner"

let query = gql`
  query MyQuery($name: String, $page: Int) {
    characters(filter: { name: $name }, page: $page) {
      results {
        name
        image
        id
      }
      info {
        pages
      }
    }
  }
`

const Home = ({ data }) => {
  let charactersArray = data.RickAndMorty.characters.results
  const [pageCount, setPageCount] = useState(34)
  const [searchedText, setSearchedText] = useState("")
  const [currentPage, setCurrentPage] = useState()
  const [isLoading, setIsloading] = useState(false)
  const [filteredCharacters, setFilteredCharacters] = useState(charactersArray)
  const isHome = true

  const handleSearch = async e => {
    setIsloading(true)
    setCurrentPage("1")
    setSearchedText(e.target.value)
    const endPoint = "https://rickandmortyapi.com/graphql"
    const variables = {
      name: e.target.value,
      page: 1,
    }
    const client = new GraphQLClient(endPoint, { headers: {} })
    try {
      const data = await client.request(query, variables)
      setFilteredCharacters(data.characters.results)
      setPageCount(data.characters.info.pages)
    } catch (error) {
      setFilteredCharacters(null)
      setPageCount(0)
    }
    setIsloading(false)
  }

  const handlePageChange = async e => {
    setIsloading(true)
    Number(e.target.innerHTML.trim()) &&
      setCurrentPage(Number(e.target.innerHTML.trim()))
    e.target.innerHTML == "»" && setCurrentPage(+currentPage + 1)
    e.target.innerHTML == "«" && setCurrentPage(+currentPage - 1)
    let page = Number(e.target.innerHTML.trim())
      ? Number(e.target.innerHTML.trim())
      : e.target.innerHTML == "»"
      ? +currentPage + 1
      : currentPage - 1
    const endPoint = "https://rickandmortyapi.com/graphql"
    const variables = {
      name: searchedText,
      page: page,
    }
    const client = new GraphQLClient(endPoint, { headers: {} })
    const data = await client.request(query, variables)
    setFilteredCharacters(data.characters.results)
    setIsloading(false)
  }

  return (
    <AppContext.Provider value={{ handleSearch }}>
      <Layout isHome={isHome}>
        {isLoading ? (
          <div className="loader">
            <Loader type="Oval" color="black" width={75} height={75} />
          </div>
        ) : (
          <>
            <Characters charactersArray={filteredCharacters} />
            <Pagination
              isHome={isHome}
              pageCount={pageCount}
              currentPage={currentPage || 1}
              setCurrentPage={setCurrentPage}
              handlePageChange={handlePageChange}
            />{" "}
          </>
        )}
      </Layout>
    </AppContext.Provider>
  )
}

export const data = graphql`
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
  data: PropTypes.object,
}

export default Home
