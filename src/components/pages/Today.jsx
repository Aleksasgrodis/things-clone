import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import NewMove from '../NewMove'
import NewSearch from '../NewSearch'
import NewTask from '../NewTask'

function Today() {
  return (
    <div className="content">
      <div className="project default">
        <header>
            <FontAwesomeIcon className="icon today large" icon={faStar} />
            <span className="title">Today</span>
        </header>
        <div className="tasks">
          {/* {standaloneTasks.map(task => (
            <Task key={task.id} {...task} />
          ))} */}
          tasks
        </div>
      </div>
      <div className="actionables">
        <NewTask />
        {/* <NewHeading parent={projectID} /> */}
        <button className="action">date</button>
        <NewMove />
        <NewSearch />
      </div>
    </div>
  )
}

export default Today
