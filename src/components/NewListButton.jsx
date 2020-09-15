import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function NewListButton() {
  return <button className="action"><FontAwesomeIcon icon={faPlus} /> New List</button>
}

export default NewListButton
