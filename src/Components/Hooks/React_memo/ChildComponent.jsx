import React, { useRef } from 'react'

const ChildComponent = () => {
    const renderCount = useRef(0);
  return (
    <div className="mt-3 font-display text-center">
    <p className="">
      Nothing changed here but Ive now rendered:
      <span className="text-red-600">{renderCount.current++} time(s)</span>
    </p>
  </div>
  )
}

export default React.memo(ChildComponent)