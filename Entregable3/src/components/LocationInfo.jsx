import React from 'react'

const LocationInfo = ({rickAndMorty}) => {

    
    return (
    <article>
        <h2>{rickAndMorty?.name}</h2>
        <ul className='ulRickAndMorty' >
        <li className='liRickAndMorty' ><span>Type:</span> <span className='description'>{rickAndMorty?.type} </span></li>
        <li className='liRickAndMorty'><span>Dimension:</span> <span className='description'>{rickAndMorty?.dimension}</span></li>
        <li className='liRickAndMorty'><span>Population:</span> <span className='description'>{rickAndMorty?.residents.length}</span></li>
        </ul>
    </article>
)
}

export default LocationInfo