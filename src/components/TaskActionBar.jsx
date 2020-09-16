import { faCalendar, faCalendarAlt, faFlag, faListUl, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function TaskActionBar() {
  return (
    <div className="actionbar">
      <button className="action"><FontAwesomeIcon icon={faCalendarAlt} /></button>
      <button className="action"><FontAwesomeIcon icon={faTag} /></button>
      <button className="action"><FontAwesomeIcon icon={faListUl} /></button>
      <button className="action"><FontAwesomeIcon icon={faFlag} /></button>
    </div>
  )
}

export default TaskActionBar
