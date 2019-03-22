import React from 'react'
import CharacterPropertyRow from "./CharacterPropertyRow";
import './Character.css'


const Character = (props)=>{
	const {data} = props;
	return (
		<div className="character-props-container">
			<div className="character-props-header">
				<div className="character-image-container">
					<img src='images/starwar.png' alt={`photo of ${data.name}`}/>
				</div>
				<h2>{data.name}</h2>
			</div>
			<ul className="character-props-list">
				<li>
					<CharacterPropertyRow propValue={data['gender']} propName={'Gender'}/>
					<CharacterPropertyRow propValue={data['birth_year']} propName={'Birth Year'}/>
					<CharacterPropertyRow propValue={data['height']} propName={'Height'}/>
					<CharacterPropertyRow propValue={data['mass']} propName={'Mass'}/>
					<CharacterPropertyRow propValue={data['hair_color']} propName={'Hair Color'}/>
					<CharacterPropertyRow propValue={data['skin_color']} propName={'Skin Color'}/>
					<CharacterPropertyRow propValue={data['eye_color']} propName={'Eye Color'}/>
				</li>
			</ul>
		</div>
	
	)
}

export default Character
