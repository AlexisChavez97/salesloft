import React from 'react'
import 'bulma/css/bulma.min.css';
import ListElement from './ListElement';

const List = ({people}) => {
  return  <table className="table is-bordered is-striped is-hoverable" style={{margin: '75px auto'}}>
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

export default List;