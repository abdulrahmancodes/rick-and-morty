import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import Character from './character';
import './characters.scss';

const Characters = () => {

    const data = useStaticQuery(graphql`
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
    `)

    const charactersArray = data.RickAndMorty.characters.results;
    console.log(charactersArray[1])
    return (
        <div className="characters">
            {charactersArray.map(characterData => <Link to={`/characters/${characterData.id}`} ><Character characterData={characterData} key={characterData.id} /></Link>)}
        </div>
    )
}

export default Characters;