import { useEffect, useState } from 'react';
import jason from '../../resources/img/jason.jpg';
import basic from '../../resources/img/basic_profile.jpg';

function Friends(props) {
	const [copyList, setCopyList] = useState([]);

	const [showProfile, setShowProfile] = useState(true);

	const bowl = [
		{ name: 'robot1', desc: 'hi', pic: 'jason' },
		{ name: 'robot2', desc: 'lol', pic: 'jason' },
		{ name: 'robot3', desc: '', pic: 'jason' },
		{ name: 'robot4', desc: 'kk', pic: 'jason' },
		{ name: 'robot5', desc: 'good', pic: 'jason' },
	];

	useEffect(() => {
		setCopyList([
			{ name: 'robot1', desc: 'lol', pic: jason },
			{ name: 'robot2', desc: 'lol', pic: jason },
			{ name: 'robot3', desc: 'lol', pic: jason },
			{ name: 'robot4', desc: 'lol', pic: jason },
			{ name: 'robot5', desc: 'lol', pic: jason },
		]);
	}, []);

	useEffect(() => {
		const resultData = bowl.filter((value) =>
			value.name.includes(props.searchText)
		);
		setCopyList(resultData);
		if(props.searchText !== '') {
			setShowProfile(false);
		} else {
			setShowProfile(true)
		}
	}, [props.searchText]);

	return (
		<main className='friendsList'>

			{
				showProfile
				? <>
					<div className='userComponent'>

						<img src={jason} alt='lol' className="userComponentAvatar userComponentAvatarXl" />
						<div className='userComponentDetails'>
							<div className='userComponentName'>
								<h4>Jason Lee</h4>
							</div>
							<div className='userComponentDesc'>
								<h5>Hi</h5>
							</div>
						</div>

					</div>
					<hr />
						<p>friends { copyList.length }</p>
					</>
				: null
			}

			{copyList.map((e)=>{
				return(
					<div className='userComponent'>

						<img src={ basic } alt='lol' className="userComponentAvatar userComponentAvatarXl" />
						<div className='userComponentDetails'>
							<div className='userComponentName'>
								<h4>{ e.name }</h4>
							</div>
							<div className='userComponentDesc'>
								<h5>{ e.desc }</h5>
							</div>
						</div>

					</div>
				)
			})}

		</main>
);
};


export default Friends;

