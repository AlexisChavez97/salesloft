import React from 'react'

const ListElement = ({person}) => {
  const {email_address: emailAddress, display_name: fullName, title} = {...person}
  return <>
    <tr>
      <td>{fullName}</td>
      <td>{emailAddress}</td>
      <td>{title}</td>
    </tr>
  </>
}

export default ListElement;