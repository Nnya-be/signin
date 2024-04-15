import React from 'react'

function NavLInks(props) {
  const {name} = props;

  return (
    <>
      <li className='px-2 py-2 cursor-pointer'>
        <a className='text-xl' href={`/${name}`}>{name}</a>
      </li>
    </>
  )
}

export default NavLInks