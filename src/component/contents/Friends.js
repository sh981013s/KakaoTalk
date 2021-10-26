import { useEffect, useState } from 'react';
import jason from '../../resources/img/jason.jpg';
import basic from '../../resources/img/basic_profile.jpg';
import { getData } from '../../utils/Api';
import { Popover } from 'antd';
import { useStore } from '../../zustand/FriendsStore';
import Profile from '../MainPage/Profile';

function Friends(props) {
	const { friendsLists, setFriendsLists, friendsWhoseBirthdayIsToday, setFriendsWhoseBirthdayIsToday } = useStore((state) => state);


	const [copyList, setCopyList] = useState([]);
	const [showProfile, setShowProfile] = useState(true);
	const [birthDayFriends, setBirthDayFriends] = useState([[], [], []]);
	const [trigger, setTrigger] = useState(false);

	const getFriendsData = async () => {
		const resultData = await getData.get('member/getFriends');
		setCopyList(resultData.data);
	};

	useEffect(() => {
		setFriendsLists('111');
	}, [friendsLists]);

	useEffect(() => {
		getFriendsData();
	}, []);

	const bowl = [
		{ name: 'robot1', desc: 'hi', pic: 'jason', bd: 19981023 },
		{ name: 'robot2', desc: 'lol', pic: 'jason', bd: 19981021 },
		{ name: 'robot3', desc: '', pic: 'jason', bd: 19981022 },
		{ name: 'robot4', desc: 'kk', pic: 'jason', bd: 19981021 },
		{ name: 'robot5', desc: 'good', pic: 'jason', bd: 19981030 },
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

		const getMonthCorrectly = (date) => {
			if (date.getMonth() + 1 < 10) {
				const tmp = (date.getMonth() + 1).toString();
				return `0${tmp}`;
			} else {
				const tmp = (date.getMonth() + 1).toString();
				return `${tmp}`;
			}
		};

		const getDayCorrectly = (date) => {
			if (date.getDate() < 10) {
				const tmp = date.getDate().toString();
				return `0${tmp}`;
			} else {
				const tmp = date.getDate().toString();
				return `${tmp}`;
			}
		};

		const todayDateNum = parseInt(
			today.getFullYear().toString() +
				getMonthCorrectly(today).toString() +
				getDayCorrectly(today).toString()
		);
		minDateToUse = parseInt(
			minDateToUse.getFullYear().toString() +
				getMonthCorrectly(minDateToUse).toString() +
				getDayCorrectly(minDateToUse).toString()
		);

		const bdPast = copyList.filter((user) => {
			return (
				parseInt(user.bd.toString().slice(-4)) >=
					parseInt(minDateToUse.toString().slice(-4)) &&
				parseInt(user.bd.toString().slice(-4)) <
					parseInt(todayDateNum.toString().slice(-4))
			);
		});

		const bdToday = copyList.filter((user) => {
			return (
				parseInt(user.bd.toString().slice(-4)) ===
				parseInt(todayDateNum.toString().slice(-4))
			);
		});

		const bdUpcoming = copyList.filter((user) => {
			return (
				parseInt(user.bd.toString().slice(-4)) >
				parseInt(todayDateNum.toString().slice(-4))
			);
		});

		setBirthDayFriends([[...bdPast], [...bdToday], [...bdUpcoming]]);
	};

	let last = { bd: 1 };

	const openChat = () => {
		window.open(
			`/adminMember`,
			'네이버새창',
			'width=500, height=800, toolbar=no, menubar=no, scrollbars=no, resizable=yes'
		);
	};

	const openBirthPage = () => {
		window.open(
			`/birthFriends`,
			'네이버새창',
			'width=400, height=600, toolbar=no, menubar=no, scrollbars=no, resizable=yes'
		);
	};
	return (
		<main className="friendsList">
			<div onClick={()=>{
				console.log(friendsWhoseBirthdayIsToday);
			}}
			onDoubleClick={()=>{
				setFriendsWhoseBirthdayIsToday(123);
			}}>asdasdasdas</div>
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
					{/*<Popover placement='left' overlayClassName='birthDay' visible={trigger} content={content}  onClick={getMonthlyBirthDay}>*/}
					{/*<Button onClick={()=>setTmp(!tmp)}>Click me</Button>*/}
					<div className="userComponent" onDoubleClick={openBirthPage}>
						<div className="friendsListIcon">
							<div className="iconBox">
								<i className="fas fa-birthday-cake fa-3x" />
							</div>
						</div>
						<div className="userComponentDetails">
							<div className="userComponentName">
								<h4>View more birthdays</h4>
							</div>
						</div>
					</div>
					{/*</Popover>*/}
					<hr />
					<p>friends {copyList.length}</p>
				</>
			) : null}

			{copyList.map((value) => {
				return (
					<div className="userComponent" onDoubleClick={openChat}>

						<Popover
							placement="left"
							overlayClassName="profileOverall"
							content={Profile(value, 'friends')}
							trigger="click"
						>
							<img
								onClick={() => {
									console.log(value, '프로필 오픈');
								}}
								src={basic}
								alt="lol"
								className="userComponentAvatar userComponentAvatarXl"
							/>
						</Popover>
						<div className="userComponentDetails">
							<div className="userComponentName">
								<h4>{value.name}</h4>
							</div>
							<div className="userComponentDesc">
								<h5>{value.desc}</h5>
							</div>
						</div>
					</div>
				);
			})}
		</main>
	);
}

export default Friends;
