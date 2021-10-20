function LeftMenu() {

	const [muted, setMuted] = useState(() => {})

	return <nav className="leftMenu">
		<ul className="navList">
			<li className='navTop'>
				<li className="navFriend"><a className="navLink"><i className="fas fa-user fa-2x"></i></a></li>
				<li className="navChat"><a className="navLink"><i className="far fa-comment fa-2x"></i></a></li>
				<li className="navMore"><a className="navLink"><i className="fas fa-ellipsis-h fa-2x"></i></a></li>
			</li>
			<li className='navSpace'></li>
			<li className='navBottom'>
				<li className="navSound"><a className="navLink"><i className="far fa-bell fa-2x"></i></a></li>
				<li className="navSetting"><a className="navLink"><i className="fas fa-cog fa-2x"></i></a></li>
			</li>

		</ul>
	</nav>;
}

export default LeftMenu;
