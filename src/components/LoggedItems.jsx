import React from 'react';
import TaskLogged from './TaskLogged';

function LoggedItems({ tasks, headings }) {
  return (
    <div>
      {tasks.map(t => (
        <TaskLogged key={t.id} {...t} />
      ))}
    </div>
  );
}

export default LoggedItems;
