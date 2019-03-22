import React from 'react'
import Character from './Character'
import './Character.css'

const CharacterList = (props)=>{
	return (
		<div className="character-list-container">
			<ul>
				{props.data.map(el => <li><Character data={el} /></li>)}
				
			</ul>
		</div>
	)
}

export default CharacterList
