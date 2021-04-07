import React from 'react'
import { countCharacters } from '../people_helper'

const CharacterFrequency = ({people}) => {
  const characters = countCharacters(people)

  return <>
    <table className="table frequency is-bordered is-striped is-hoverable" style={{margin: '75px auto'}}>
      <thead>
        <tr>
          <th>Character</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
        { characters.map(character => (
          <tr key={character[0]}>
            <td>{character[0]}</td>
            <td>{character[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
}

export default CharacterFrequency;