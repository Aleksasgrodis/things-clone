import React, { useEffect, useState } from 'react'
import onOutsideClick from './onOutsideClick';

function Test({self, target, ...props}) {
  const [selected, setSelected] = useState(false)
  useEffect(() => {
    if(self && !self.contains(target)) setSelected(false)
  }, [target, self])
  return (
    <div style={{ color: selected ? "red" : 'white'}} onClick={() => setSelected(true)}>
      hey, test!
    </div>
  )
}

export default onOutsideClick(Test)

