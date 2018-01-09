import React from 'react';
import Card from './Card';

const ChampList = ({champions}) => {
	return (
		<div>
			{
				Object.keys(champions).map((champion, index) => {
					return (
						<Card 
							id = {champions[champion]['id']} 
							name = {champions[champion]['name']} 
							title = {champions[champion]['title']} 
							img = {champion} 
						/>
					);
				})
			}
		</div>
	);

}

export default ChampList;



