import React from 'react'
import Character from './Character'
import './Character.css'

const CharacterList = ()=>{
	return (
		<div className="character-list-container">
			<ul>
				<li><Character /></li>
			</ul>
		</div>
	)
}

export default CharacterList
