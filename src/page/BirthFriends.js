import { useEffect } from 'react';
import { getData } from '../utils/Api';
import moment from 'moment';
import convertDate from '../utils/convertDate';


/**
 * @author seung hwan lee
 * @date 2021.10.23
 * @description birth friends component
 **/
const BirthFriends = () => {


	const getBirthFriends = async () => {
		const resultData = await getData.get('member/getFriends');
		const filterBirth = moment(resultData.data[0].birth, 'YYYY MM DD hh:mm:ss').format('MM-DD');
		const words = filterBirth.split('-');
		const month = convertDate(words[0]);
	};

	useEffect(() => {
		getBirthFriends();
	}, []);

	return (
		<div>
			<div className='friendsModal'>

				<h2>Friends with Birthdays</h2>
				<div className='friendsModalRow'>
					{/*<h3>Past Birthdays</h3>
					{
						birthDayFriends[0].map((user) => {
							if (user.bd !== last.bd) {
								last = user;
								console.log(last);
								return (
									<>
										<div>{user.bd}</div>
										<div>{user.name}</div>
									</>
								)
							} else {
								last = user;
								return (
									<div>{user.name}</div>
								)
							}
						})
					}
					<hr />
				</div>
				<div className='friendsModalRow'>
					<h3>Today</h3>
					{
						birthDayFriends[1].map((user) => {
							if (user.bd !== last.bd) {
								last = user;
								console.log(last);
								return (
									<>
										<div>{user.bd}</div>
										<div>{user.name}</div>
									</>
								)
							} else {
								last = user;
								return (
									<div>{user.name}</div>
								)
							}
						})
					}
					<hr />
				</div>
				<div className='friendsModalRow'>
					<h3>Upcoming Birthdays</h3>
					{
						birthDayFriends[2].map((user) => {
							if (user.bd !== last.bd) {
								last = user;
								console.log(last);
								return (
									<>
										<div>{user.bd}</div>
										<div>{user.name}</div>
									</>
								)
							} else {
								last = user;
								return (
									<div>{user.name}</div>
								)
							}
						})
					} */}
				</div>

			</div>
		</div>
	);
};
export default BirthFriends;