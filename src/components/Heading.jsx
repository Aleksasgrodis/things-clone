import React from 'react';
import { ItemTypes } from './Constants';
import { useDrop } from 'react-dnd';
import Task from './Task';
import { useDispatch } from 'react-redux';
import { editTodoHeading } from '../redux/actions';

function Heading(props) {
  const [collectedProps, drop] = useDrop({
    accept: [ItemTypes.TASK],
    drop: item => changeTaskHeader(item),
  });
  const dispatch = useDispatch();
  const node = React.useRef();
  const changeTaskHeader = ({ id }) => {
    dispatch(editTodoHeading({ id, heading: props.id, headingTitle: props.title }));
  };

  React.useEffect(() => {
    const handleClick = e => {
      if (!node.current.contains(e.target) && e.target.type !== 'submit') {
        props.setSelectedHeading(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [props]);

  return (
    <div ref={node}>
      <div className="heading-wrapper" ref={drop}>
        <div
          className={`heading ${
            props.selectedHeading && props.selectedHeading.id === props.id ? 'selected' : ''
          }`}
          onClick={() => props.setSelectedHeading({id: props.id, title: props.title})}
        >
          <p>{props.title}</p>
        </div>
        <div className="tasks">
          {props.tasks.length
            ? props.tasks.map(t => <Task key={t.id} {...t} />)
            : null}
        </div>
      </div>
    </div>
  );
}

export default Heading;
