import React from 'react';

export default function Character({character}) {
  return(
    <li>
      <img className='block m-auto' src={character.image} alt={character.name} />
      <h2 className='text-center mt-5'>{character.name}</h2>
    </li>
  )
}