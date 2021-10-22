import { useEffect, useState } from 'react';
// import {getData} from '../utils/Api';
import { Button, Input, Menu, Popover, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import telCode from '../utils/telCode';
import basic from '../resources/img/basic_profile.jpg';
import { useStore } from '../zustand/FriendsStore';

function Header(props) {
	const {friendsLists, setFriendsLists} = useStore(state => state)

	const [text, setText] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [trigger, setTrigger] = useState(false);
	const [current, setCurrent] = useState('contacts');
	const [searchFriends, setSearchFriends] = useState('');
	const [countryCode, setCountryCode] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [addFriendsButton, setAddFriendsButton] = useState(false);
	const [allFilled, setAllFilled] = useState(false);
	const [isValidInfoToAdd, setIsValidInfoToAdd] = useState(true);
	const [isAlreadyExistAsFriend, setIsAlreadyExistAs] = useState(false);

	const [searchFriendsById, setSearchFriendsById] = useState('');
	const [isExistById, setIsExistById] = useState('');

	const [searchByIdResult, setSearchByIdResult] = useState('');
	const [searchByIdInputSave, setSearchByIdInputSave] = useState('');

	const [friendsList, setFriendsList] = useState([]);
	let addFriendsButtonColor =
		'addFriendsButton' + (allFilled ? ' addFriendsButton-active' : '');


	useEffect(()=>{
		console.log(friendsLists,'friendsLists 여기는 header')
	},[friendsLists])

	useEffect(() => {
		if (
			(countryCode && searchFriends && phoneNumber !== '') ||
			searchFriendsById !== ''
		) {
			setAllFilled(true);
		} else {
			setAllFilled(false);
		}
	}, [countryCode, searchFriends, phoneNumber, searchFriendsById]);

	const getSearchData = async () => {};

	const handleClick = (e) => {
		setCurrent(e.key);
	};

	useEffect(() => {
		getSearchData();
	}, []);

	useEffect(() => {
		props.receive(text);
	}, [text]);

	const entireUser = [
		{
			countryCode: '+82',
			name: 'lee',
			phoneNumber: '01093021013',
			kakaoID: 'sh981013',
			desc: 'lol',
		},
		{
			countryCode: '+82',
			name: 'kim',
			phoneNumber: '01011111111',
			kakaoID: 'aaa',
			desc: 'h1',
		},
		{
			countryCode: '+82',
			name: 'kwon',
			phoneNumber: '01022222222',
			kakaoID: 'bbb',
			desc: 'bye',
		},
		{
			countryCode: '+82',
			name: 'park',
			phoneNumber: '01033333333',
			kakaoID: 'ccc',
			desc: 'good',
		},
	];

	const addFriendEventByContacts = () => {
		const userToAdd = entireUser.filter((user) => {
			return (
				user.countryCode === countryCode && user.phoneNumber === phoneNumber
			);
		});
		console.log(friendsList, 'friendsList');
		console.log(userToAdd[0].phoneNumber);
		if (userToAdd.length > 0) {
			let isAlreadyExist = friendsList.find(
				(c) => c.phoneNumber === userToAdd[0].phoneNumber
			);
			if (isAlreadyExist) {
				setIsValidInfoToAdd(false);
				setIsAlreadyExistAs(true);
				setAllFilled(false);
			} else {
				userToAdd[0].name = searchFriends;
				// friendsList.push(...userToAdd);
				console.log('added');
				setFriendsList([...friendsList, { ...userToAdd[0] }]);
				setIsValidInfoToAdd(true);
				console.log(friendsList);
			}
		} else {
			setIsValidInfoToAdd(false);
			setAllFilled(false);
		}
	};

	const searchById = () => {
		const result = entireUser.filter((user) => {
			return user.kakaoID === searchFriendsById;
		});
		setSearchByIdInputSave(searchFriendsById);
		if (result.length > 0) {
			setIsExistById(true);
			setSearchByIdResult(result);
		} else {
			setIsExistById(false);
		}
	};

	const addFriendEventById = () => {
		const userToAdd = [{ ...searchByIdResult[0] }];
		console.log(userToAdd, 'userToAdd');
		if (userToAdd.length > 0) {
			let isAlreadyExist = friendsList.find(
				(c) => c.phoneNumber === userToAdd[0].phoneNumber
			);
			if (isAlreadyExist) {
				console.log('already exist');
				return null;
			} else {
				console.log('added');
				setFriendsList([...friendsList, { ...userToAdd[0] }]);
			}
		} else {
			return null;
		}
	};


	let searchByIdContent =
		isExistById === true ? (
			<div className="searchByIdContent">
				<div className="addFriendsByIdProfilePicBox">
					<img src={basic} alt="lol" className="addFriendsByIdProfilePic" />
				</div>
				<p className="searchByIdContentName">{searchByIdResult[0].name}</p>
				<p className="searchByIdContentDesc">{searchByIdResult[0].desc}</p>
			</div>
		) : isExistById === false ? (
			<div className="searchByIdContent">
				<p className="searchByIdContentName">
					Unable to find '{searchByIdInputSave}'
				</p>
				<p className="searchByIdContentDesc">
					The ID does not exist or is non-searchable.
				</p>
			</div>
		) : isExistById === '' ? (
			<div>
				<p className="searchByIdContentDesc">
					You can find friends if they have created an ID and it is set as
					searchable to others
				</p>
			</div>
		) : null;

	useEffect(() => {
		props.receive(text);
	}, [text]);

	let addFriendsModalDesc = isValidInfoToAdd
		? 'Enter a name and phone number.'
		: isAlreadyExistAsFriend
		? 'This user is alreay on your KakaoTalk friends list.'
		: 'Invalid phone number. Please enter a different number.';

	const addFriendsClearBtnFunc = () => {
		setIsExistById('');
		setSearchFriendsById('');
	};

	const content = (
		<div className="addFriendsModal">
			<h2 className="addFriendsModalTitle">Add Friends</h2>
			<Menu
				className="addFriends"
				onClick={handleClick}
				selectedKeys={[current]}
				mode="horizontal"
			>
				<Menu.Item key="contacts">Contacts</Menu.Item>
				<Menu.Item key="ID">ID</Menu.Item>
			</Menu>
			{current === 'contacts' ? (
				<>
					<div className="addFriendsContent">
						<Input
							placeholder="Name"
							value={searchFriends}
							onChange={(e) => setSearchFriends(e.target.value)}
							suffix={
								<span
									onClick={() => {
										setSearchFriends('');
									}}
								>
									<i className="fas fa-times-circle"></i>
								</span>
							}
						/>
						<div className="addFriendsFirstInput">
							<Select
								className="addFriendsCountry"
								onChange={(e) => setCountryCode(e)}
								value={countryCode}
								style={{ width: 100 }}
							>
								{telCode.map((country) => {
									return (
										<Option value={country.dial_code}>
											{country.dial_code} {country.name}
										</Option>
									);
								})}
							</Select>
							<Input
								placeholder="Phone Number"
								className="addFriendsPhone"
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
							/>
						</div>
						<p>{addFriendsModalDesc}</p>
						<Button
							className={addFriendsButtonColor}
							disabled={!allFilled}
							onClick={addFriendEventByContacts}
						>
							Add Friends
						</Button>
					</div>
				</>
			) : (
				<>
					<div className="addFriendsContent">
						<Input
							placeholder="KakakoTalk ID"
							value={searchFriendsById}
							onChange={(e) => setSearchFriendsById(e.target.value)}
							onPressEnter={searchById}
							suffix={
								<span onClick={addFriendsClearBtnFunc}>
									<i className='fas fa-times-circle'/>
								</span>
							}
						/>
						{/*<p>{ addFriendsModalDesc }</p>*/}
						{searchByIdContent}
						<Button
							className={addFriendsButtonColor}
							disabled={!allFilled}
							onClick={addFriendEventById}
						>
							Add Friends
						</Button>
					</div>
				</>
			)}
		</div>
	);

	return (
		<header className="screenHeader">
			<div className="mainTop">
				<h1
					className="screenHeaderTitle"
					onClick={() => {
						console.log(friendsList);
					}}
				>
					Friends
				</h1>
				<div className="screenHeaderIcons">
					<span>
						<i
							className="fas fa-search fa-lg"
							onClick={() => {
								setTrigger(!trigger);
							}}
						/>
					</span>
					<span>
						<Popover placement="bottomRight" content={content} trigger="click">
							<i className="fas fa-user-plus fa-lg" />
						</Popover>
					</span>
				</div>
			</div>
			{trigger ? (
				<div className="searchModal">
					<input
						class="searchModalInput"
						type="text"
						placeholder="&#xf002;  Search Friends"
						onChange={(e) => {
							setText(e.target.value);
						}}
					/>
				</div>
			) : null}
		</header>
	);
}

export default Header;
