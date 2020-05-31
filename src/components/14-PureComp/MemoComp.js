import React from 'react'

function MemoComp({name}) {
  console.log("------ Memo Component ------");
  return (
    <div>
      <h4>Memo Component : {name}</h4>
    </div>
  )
}

export default React.memo(MemoComp) // Only Change here
