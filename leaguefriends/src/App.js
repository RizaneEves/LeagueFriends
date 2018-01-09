import React from 'react';
import ChampList from './ChampList';
import { champions } from './champions';


const App = () => {
	return (
		<div>
			<h1>LeagueFriends</h1>
			<ChampList champions={champions}/>
		</div>
	);
}

export default App;