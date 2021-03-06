import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--white bg-black white'
				type='search' 
				placeholder='search champions'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;