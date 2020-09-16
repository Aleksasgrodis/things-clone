import React, { useEffect, useRef, useState } from 'react';

const onOutsideClick = BaseComponent => props => {
  const node = useRef();
  const [target, setTarget] = useState('');
  useEffect(() => {
    const handleOutsideClick = e => {
      setTarget(e.target);
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  return (
    <div ref={node}>
      <BaseComponent {...props} target={target} self={node.current} />
    </div>
  );
};

export default onOutsideClick;
