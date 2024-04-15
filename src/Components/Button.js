import React from 'react'

function Button(props) {
const {text} = props ;
  return (
    <>
        <button className='bg-orange-100 text-red-600 px-4 rounded py-2'>
            {text}
        </button>
    </>
  )
}

export default Button