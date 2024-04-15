import React from 'react'

function SecondaryHeader(props) {
    const {title} = props;
  return (
    <>
    <h2 className='text-2xl font-bold text-amber-500/80'>
    {title}
    </h2>
    </>
  )
}

export default SecondaryHeader