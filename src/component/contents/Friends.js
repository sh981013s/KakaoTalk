import { useEffect, useState } from 'react';

function Friends(props) {
	const [copyList, setCopyList] = useState([]);

	const bowl = [
		{ name: 'robot1' },
		{ name: 'robot2' },
		{ name: 'robot3' },
		{ name: 'robot4' },
		{ name: 'robot5' },
	];

	useEffect(() => {
		setCopyList([
			{ name: 'robot1' },
			{ name: 'robot2' },
			{ name: 'robot3' },
			{ name: 'robot4' },
			{ name: 'robot5' },
		]);
	}, []);

	useEffect(() => {
		const resultData = bowl.filter((value) =>
			value.name.includes(props.searchText)
		);
		setCopyList(resultData);
	}, [props.searchText]);

	return (
		<>
			{copyList.map((value) => (
				<div>{value.name}</div>
			))}
		</>
	);
}

export default Friends;
