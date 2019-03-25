import React from 'react'
import './Character.css'
import CharacterPropertyRow from "./Character";


const CharacterPropsList = (prop)=>{
	return (
		<div className="property-row-container">
			<label>{prop.propName}</label>
			<ul className="character-props-list-container">
				{prop.propValue.map((el, idx) =>
					<li key={idx}>
						<h2>{el}</h2>
					</li>
					
				)}
			</ul>
		</div>
		
	)
}

export default CharacterPropsList
