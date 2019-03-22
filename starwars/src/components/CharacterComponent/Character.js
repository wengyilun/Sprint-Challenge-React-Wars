import React from 'react'
import CharacterPropertyRow from "./CharacterPropertyRow";
import './Character.css'


const Character = ()=>{
	return (
		<div className="character-props-container">
			<h2>Luke Skywalker</h2>
			<ul className="character-props-list">
				<li>
					<CharacterPropertyRow/>
				</li>
				<li>
					<CharacterPropertyRow/>
				</li>
				<li>
					<CharacterPropertyRow/>
				</li>
				<li>
					<CharacterPropertyRow/>
				</li>
			</ul>
		</div>
	
	)
}

export default Character
