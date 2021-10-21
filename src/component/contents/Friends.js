import { useEffect, useState } from 'react';
import jason from '../../resources/img/jason.jpg';
import basic from '../../resources/img/basic_profile.jpg';
import { getData } from '../../utils/Api';
import { Popover } from 'antd';

function Friends(props) {
	const [copyList, setCopyList] = useState([]);
	const [showProfile, setShowProfile] = useState(true);
	const [birthDayFriends, setBirthDayFriends] = useState([[],[],[]]);
	const [bdLastPersonSave, setBdLastPersonSave] = useState([]);

	const getFriendsData = async () => {
		const resultData = await getData.get('member/getFriends');
		setCopyList(resultData.data);
	};

	useEffect(() => {
		getFriendsData();
	}, []);

	const bowl = [
		{ name: 'robot1', desc: 'hi', pic: 'jason', bd: 19981023 },
		{ name: 'robot2', desc: 'lol', pic: 'jason', bd: 19981021  },
		{ name: 'robot3', desc: '', pic: 'jason', bd: 19981022  },
		{ name: 'robot4', desc: 'kk', pic: 'jason', bd: 19981021  },
		{ name: 'robot5', desc: 'good', pic: 'jason', bd: 19981030  },
	];

	useEffect(() => {
		const resultData = bowl.filter((value) =>
			value.name.includes(props.searchText)
		);
		setCopyList(resultData);
		if (props.searchText !== '') {
			setShowProfile(false);
		} else {
			setShowProfile(true);
		}
	}, [props.searchText]);

	useEffect(() => {
		props.func(copyList);
	}, [copyList]);

	const getMonthlyBirthDay = () => {

		const today = new Date();
		const year = today.getFullYear();
		const month = today.getMonth();
		const day = today.getDate();
		let minDateNum = today.getDate() - 15;
		let minDateToUse = new Date(year, month, day);
		minDateToUse.setDate(minDateNum);

		const getMonthCorrectly = date => {
			if((date.getMonth() +1) < 10 ) {
				const tmp = (date.getMonth() +1).toString();
				return `0${tmp}`;
			} else {
				const tmp = (date.getMonth() +1).toString();
				return `${tmp}`;
			}
		}

		const getDayCorrectly = date => {
			if((date.getDate()) < 10 ) {
				const tmp = (date.getDate()).toString();
				return `0${tmp}`;
			} else {
				const tmp = (date.getDate()).toString();
				return `${tmp}`;
			}
		}

		const todayDateNum = parseInt(today.getFullYear().toString() + getMonthCorrectly(today).toString() + getDayCorrectly(today).toString());
		minDateToUse = parseInt(minDateToUse.getFullYear().toString() + getMonthCorrectly(minDateToUse).toString() + getDayCorrectly(minDateToUse).toString());



		const bdPast = copyList.filter(user => {
			return  parseInt(user.bd.toString().slice(-4)) >= parseInt(minDateToUse.toString().slice(-4)) && parseInt(user.bd.toString().slice(-4)) < parseInt(todayDateNum.toString().slice(-4))
		})

		const bdToday = copyList.filter(user => {
			return  parseInt(user.bd.toString().slice(-4)) === parseInt(todayDateNum.toString().slice(-4))
		})

		const bdUpcoming = copyList.filter(user => {
			return  parseInt(user.bd.toString().slice(-4)) > parseInt(todayDateNum.toString().slice(-4))
		})

		setBirthDayFriends([[...bdPast],[...bdToday],[...bdUpcoming]])

	}

	let last = {bd:1};

	const content = (
		<div class='friendsModal'>

			<h2>Friends with Birthdays</h2>
			<div className='friendsModalRow'>
				<h3>Past Birthdays</h3>
			{
				birthDayFriends[0].map((user) => {
					if(user.bd !== last.bd) {
						last = user;
						console.log(last);
						return(
							<>
								<div>{user.bd}</div>
								<div>{user.name}</div>
							</>
						)
					} else {
						last = user;
						return(
							<div>{user.name}</div>
						)
					}
				})
			}
			<hr/>
			</div>
			<div className='friendsModalRow'>
				<h3>Today</h3>
				{
					birthDayFriends[1].map((user) => {
						if(user.bd !== last.bd) {
							last = user;
							console.log(last);
							return(
								<>
									<div>{user.bd}</div>
									<div>{user.name}</div>
								</>
							)
						} else {
							last = user;
							return(
								<div>{user.name}</div>
							)
						}
					})
				}
				<hr/>
			</div>
			<div className='friendsModalRow'>
				<h3>Upcoming Birthdays</h3>
				{
					birthDayFriends[2].map((user) => {
						if(user.bd !== last.bd) {
							last = user;
							console.log(last);
							return(
								<>
									<div>{user.bd}</div>
									<div>{user.name}</div>
								</>
							)
						} else {
							last = user;
							return(
								<div>{user.name}</div>
							)
						}
					})
				}
			</div>

		</div>
	)

	return (
		<main className="friendsList">
			{showProfile ? (
				<>
					<div className="userComponent">
						<img
							src={jason}
							alt="lol"
							className="userComponentAvatar userComponentAvatarXl"
						/>
						<div className="userComponentDetails">
							<div className="userComponentName">
								<h4>Jason Lee</h4>
							</div>
							<div className="userComponentDesc">
								<h5>Hi</h5>
							</div>
						</div>
					</div>
					<hr />
					<p>Friends with Birthdays {copyList.length}</p>
					<Popover placement='left' overlayClassName='birthDay' content={content} trigger='click' onClick={getMonthlyBirthDay}>
						{/*<Button onClick={()=>setTmp(!tmp)}>Click me</Button>*/}
						<div className='userComponent'>
							<div className='friendsListIcon'>
								<div className='iconBox'>
									<i className="fas fa-birthday-cake fa-3x" />
								</div>

							</div>
							<div className='userComponentDetails'>
								<div className="userComponentName"><h4>View more birthdays</h4></div>
							</div>

						</div>
					</Popover>
					<hr />
					<p>friends {copyList.length}</p>
				</>
			) : null}

			{copyList.map((e) => {
				return (
					<div className="userComponent">
						<img
							src={basic}
							alt="lol"
							className="userComponentAvatar userComponentAvatarXl"
						/>
						<div className="userComponentDetails">
							<div className="userComponentName">
								<h4>{e.name}</h4>
							</div>
							<div className="userComponentDesc">
								<h5>{e.desc}</h5>
							</div>
						</div>
					</div>
				);
			})}
		</main>
	);
}

export default Friends;
