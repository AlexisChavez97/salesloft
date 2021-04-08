import React from 'react'
import ListElement from './ListElement';

const PeopleList = ({people}) => {
  return  <table className="table people-list is-bordered is-striped is-hoverable">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      { people.map(person => {
        return <ListElement key={person.id} person={person}/>
      })}
    </tbody>
  </table>
}

export default PeopleList;