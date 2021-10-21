import { useEffect, useState } from 'react';

function LeftMenu() {
	const [mutedState, setMutedState] = useState(false);



	const muteSingle = (elem) => {
		elem.muted = true;
		elem.pause();
	}

	const unMuteSingle = (elem) => {
		elem.muted = false;
		elem.play();
	}

	const muteAllFunc = () => {
		document.querySelectorAll('video, audio').forEach(elem => muteSingle(elem));
	}

	const unMuteAllFunc = () => {
		document.querySelectorAll('video, audio').forEach(elem => unMuteSingle(elem));
	}

	useEffect(()=>{
		mutedState ?
			muteAllFunc()
		: unMuteAllFunc()
	},[mutedState])

	return (
		<nav className="leftMenu">
			<ul className="navList">
				<li className="navTop">
					<li className="navFriend">
						<a className="navLink">
							<i className="fas fa-user fa-2x"></i>
						</a>
					</li>
					<li className="navChat">
						<a className="navLink">
							<i className="far fa-comment fa-2x"></i>
						</a>
					</li>
					<li className="navMore">
						<a className="navLink">
							<i className="fas fa-ellipsis-h fa-2x"></i>
						</a>
					</li>
				</li>
				<li className="navSpace" />
				<li className="navBottom">
					<li className="navSound">
						<a className="navLink">
							<i className= {mutedState ? 'far fa-bell-slash fa-2x' : 'far fa-bell fa-2x'}
							onClick={()=> setMutedState(!mutedState)} />
						</a>
					</li>
					<li className="navSetting">
						<a className="navLink">
							<i className="fas fa-cog fa-2x"></i>
						</a>
					</li>
				</li>
			</ul>
		</nav>
	);
}

export default LeftMenu;
