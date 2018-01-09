import React from 'react';

const Card = ({id, name, title, img}) => {
	return (
		<div className ='bg-black white dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='photo' src= {`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${img}_0.jpg`} />
			<div>
				<h4>{name}, <br />{title}</h4>
			</div>
		</div>
		);
}

export default Card;