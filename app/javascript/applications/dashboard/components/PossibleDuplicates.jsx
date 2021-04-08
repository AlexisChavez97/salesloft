import React from 'react'
import { findPossibleDuplicates } from '../people_helper'

const PossibleDuplicates = ({people}) => {
  const possibleDuplicatedEmails = findPossibleDuplicates(people)
  return <>
    <table className="table duplicates is-bordered is-striped is-hoverable">
      <thead>
        <tr>
          <th>Email</th>
          <th>Possible duplicates</th>
        </tr>
      </thead>
      <tbody>
        { possibleDuplicatedEmails.map(duplicatePair => (
          <tr key={duplicatePair.email}>
            <td>{duplicatePair.email}</td>
            <td>{duplicatePair.duplicates}</td>
          </tr>
        )) }
      </tbody>
    </table>
  </>
}

export default PossibleDuplicates;