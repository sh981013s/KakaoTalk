import { useEffect, useState } from 'react';
// import {getData} from '../utils/Api';
import * as Friends from './contents/Friends';
import {Button, Input, Menu, Popover, Select, Modal } from "antd";
import {Option} from "antd/es/mentions";
import telCode from  '../utils/telCode';


function Header(props) {
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
	const [isExistById, setIsExistById] = useState(false);

	const [searchByIdResult, setSearchByIdResult] = useState('');

	let addFriendsButtonColor = 'addFriendsButton' + (allFilled ? ' addFriendsButton-active' : '');


	useEffect(()=> {
		if(countryCode && searchFriends && phoneNumber !== '' || searchFriendsById !== '') {
			setAllFilled(true);
		} else {
			setAllFilled(false);
		}
	}, [countryCode, searchFriends, phoneNumber, searchFriendsById])

	const getSearchData = async () => {
	}

	const handleClick = (e) => {
		setCurrent(e.key)
	}

	useEffect(()=>{
		getSearchData()
	},[])

	useEffect(() => {
		props.receive(text);
	}, [text]);


	const entireUser = [
		{countryCode: '+82', name: 'lee', phoneNumber: '01093021013', kakaoID: 'sh981013'},
		{countryCode: '+82', name: 'kim', phoneNumber: '01011111111', kakaoID: 'aaa'},
		{countryCode: '+82', name: 'kwon', phoneNumber: '01022222222', kakaoID: 'bbb'},
		{countryCode: '+82', name: 'park', phoneNumber: '01033333333', kakaoID: 'ccc'},
	]

	let friendsList = [];

	const addFriendEventByContacts = () => {
		const userToAdd = entireUser.filter(user => {
			return(user.countryCode === countryCode && user.phoneNumber === phoneNumber)
		})
		if(userToAdd.length > 0) {
			const isAlreadyExist = friendsList.find((c)=> c.phoneNumber === userToAdd[0].phoneNumber);
			if(isAlreadyExist) {
				setIsValidInfoToAdd(false);
				setIsAlreadyExistAs(true);
				setAllFilled(false);
			} else {
				userToAdd[0].name = searchFriends;
				friendsList.push(...userToAdd);
				setIsValidInfoToAdd(true);
				console.log(friendsList);
			}
		} else {
			setIsValidInfoToAdd(false);
			setAllFilled(false);
		}
		};

	const addFriendEventById = () => {
		const userToAdd = entireUser.filter(user => {
			return (user.kakaoID === searchFriendsById);
		})
		if(userToAdd.length > 0) {
			const isAlreadyExist = friendsList.find((c)=> c.phoneNumber === userToAdd[0].phoneNumber);
			if(isAlreadyExist) {
				setIsValidInfoToAdd(false);
				setIsAlreadyExistAs(true);
				setAllFilled(false);
			} else {
				friendsList.push(...userToAdd);
				setIsValidInfoToAdd(true);
				console.log(friendsList);
			}
		} else {
			setIsValidInfoToAdd(false);
			setAllFilled(false);
		}
	}



	const searchById = () => {
		let result = entireUser.filter(user => {
			return user.kakaoID === searchFriendsById
		})
		if (result.length > 0) {
			setIsExistById(true);
			console.log(isExistById);
			setSearchByIdResult(result);
		} else {
			setIsExistById(false);
			console.log(isExistById);
		}
	}

/*	useEffect(() => {
		consol
	},[setSearchByIdResult()])*/



	let searchByIdContent = (
		isExistById ?
			<div>{ searchByIdResult[0].name }</div>
			: <div>nope</div>
	);




	useEffect(() => {
		props.receive(text);
	}, [text]);



	let addFriendsModalDesc = (isValidInfoToAdd ? 'Enter a name and phone number.' :
		isAlreadyExistAsFriend ? 'This user is alreay on your KakaoTalk friends list.'
			: 'Invalid phone number. Please enter a different number.');




	const content = (
		<div className='addFriendsModal'>
			<h2 className='addFriendsModalTitle'>Add Friends</h2>
			<Menu className='addFriends' onClick={handleClick} selectedKeys={[current]} mode="horizontal">
				<Menu.Item key="contacts">
					Contacts
				</Menu.Item>
				<Menu.Item key="ID">
					ID
				</Menu.Item>
			</Menu>
			{
				current === 'contacts' ?
					<>
						<div className='addFriendsContent'>
							<Input placeholder='Name' value={searchFriends} onChange={(e) => setSearchFriends(e.target.value)} suffix={<span onClick={()=>{setSearchFriends('')}}><i
								className="fas fa-times-circle"></i></span>}/>
							<div className='addFriendsFirstInput'>
								<Select className='addFriendsCountry' onChange={(e)=> setCountryCode(e)} value={countryCode} style={{width:100}}>
									{ telCode.map((country) => {
										return (<Option value={country.dial_code}>{country.dial_code} {country.name}</Option>)
									}) }
								</Select>
								<Input  placeholder='Phone Number' className='addFriendsPhone' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
							</div>
							<p>{ addFriendsModalDesc }</p>
							<Button className={addFriendsButtonColor} disabled={!allFilled} onClick={addFriendEventByContacts}>Add Friends</Button>

						</div>

					</>
					:
					<>
						<div className='addFriendsContent'>
							<Input placeholder='KakakoTalk ID' value={searchFriendsById} onChange={(e) => setSearchFriendsById(e.target.value)} onPressEnter={searchById} suffix={<span onClick={()=>{setSearchFriendsById('')}}><i
								className="fas fa-times-circle"></i></span>}/>
							<p>{ addFriendsModalDesc }</p>
							<Button className={addFriendsButtonColor} disabled={!allFilled} onClick={addFriendEventById}>Add Friends</Button>
							{ searchByIdContent }

						</div>
					</>
			}
		</div>
	);



	return (
		<header className="screenHeader">
			<div className='mainTop'>
				<h1 className='screenHeaderTitle'>Friends</h1>
				<div className="screenHeaderIcons">
					<span><i className="fas fa-search fa-lg" onClick={() => {
						setTrigger(!trigger);
					}}/></span>
					<span><Popover placement="bottomRight" content={content} trigger="click">
						<i className="fas fa-user-plus fa-lg" />
					</Popover></span>
				</div>
			</div>
			{
				trigger ?
					<div className='searchModal'>
						<input class='searchModalInput' type='text' placeholder='&#xf002;  Search Friends' onChange={(e) => {
							setText(e.target.value)
						}
						}/>
					</div>
					: null
			}
		</header>
	);
}

export default Header;
