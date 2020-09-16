import React, { useEffect, useState } from 'react'
import withOutsideClick from './withOutsideClick';

function Test({setClickedOutside, clickedOutside, ...props}) {
  const [selected, setSelected] = useState(false)
  useEffect(() => {
    setSelected(false);
    setClickedOutside(false)
  }, [setClickedOutside, clickedOutside])
  return (
    <div style={{ color: selected ? "red" : 'white'}} onClick={() => setSelected(true)}>
      hey, test!
    </div>
  )
}

export default withOutsideClick(Test)

