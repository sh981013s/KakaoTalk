import { Fragment } from 'react'

const BirthdayList = () => {
	const openBirthPage = () => {
		window.open(
			'/birthFriends',
			'네이버새창',
			'width=400, height=600, toolbar=no, menubar=no, scrollbars=no, resizable=yes'
		);
	};
	return (
		<Fragment>
			<p>Friends with Birthdays</p>
			<div className='userComponent' onDoubleClick={openBirthPage}>
				<div className='friendsListIcon'>
					<div className='iconBox'>
						<i className='fas fa-birthday-cake fa-3x' />
					</div>
				</div>
				<div className='userComponentDetails'>
					<div className='userComponentName'>
						<h4>View more birthdays</h4>
					</div>
				</div>
			</div>
			<hr />
		</Fragment>
	);
};

export default BirthdayList;