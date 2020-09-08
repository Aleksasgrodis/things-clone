import React, { useState } from 'react'
import AddTask from './NewTask'

function TestArea(props) {
  let parent = 'testparent';
  const [heading, setHeading] = useState(null)
  return (
    <div>
      <AddTask parent={parent} heading={heading} />
    </div>
  )
}

export default TestArea
