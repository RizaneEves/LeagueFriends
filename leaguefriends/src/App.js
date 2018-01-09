import React, { Component } from 'react';
import ChampList from './ChampList';
import SearchBox from './SearchBox';
import { champions } from './champions';


class App extends Component {
	constructor() {
		super();
		this.state = {
			champions: champions,
			searchfield: ''
		};
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render() {

		const filteredChampions = Object.keys(this.state.champions)
			.filter(champion => champions[champion]['name'].toLowerCase().includes(this.state.searchfield.toLowerCase()))
			.reduce((obj, champion) => {
				obj[champion] = champions[champion];
				return obj;
			}, {});

		return (
		<div className = "tc">
			<h1>LeagueFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<ChampList champions={filteredChampions}/>
		</div>
	);
	}	
}

export default App;