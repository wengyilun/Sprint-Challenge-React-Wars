import React from 'react'
import PropertyRow from "./PropertyRow";

const Character = ()=>{
	return (
		<ul className="character-list">
			<li>
				<PropertyRow/>
				<PropertyRow/>
				<PropertyRow/>
			</li>
		</ul>
	)
}

export default Character
