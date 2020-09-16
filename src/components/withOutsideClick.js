import React, { useEffect, useRef, useState } from 'react';

const withOutsideClick = BaseComponent => props => {
  const node = useRef();
  const [clickedOutside, setClickedOutside] = useState(false);
  useEffect(() => {
    const handleOutsideClick = e => {
      if (!node.current.contains(e.target)) {
        setClickedOutside(true)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  return (
    <div ref={node}>
      <BaseComponent
        clickedOutside={clickedOutside}
        setClickedOutside={setClickedOutside}
        {...props}
      />
    </div>
  );
};

export default withOutsideClick;
