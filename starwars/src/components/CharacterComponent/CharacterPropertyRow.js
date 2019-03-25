import React from 'react'
import './Character.css'


const CharacterPropertyRow = (props)=>{
	return (
		<div className="property-row-container">
			<label>{props.propName}:</label>
			<h2>{props.propValue}</h2>
		</div>
	)
}

export default CharacterPropertyRow
