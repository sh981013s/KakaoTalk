import { CloseOutlined, UserAddOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import KakaoModal from './common/KakaoModal';
import { SearchIcon } from '../resources/styled/layout';
import {getData} from '../utils/Api';
import * as Friends from './contents/Friends';
import {Button, Input, Menu, Popover, Select, Modal } from "antd";
import {Option} from "antd/es/mentions";
import telCode from  '../utils/telCode';


function Header(props) {
	const [text, setText] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [trigger, setTrigger] = useState(false);
	const [current, setCurrent] = useState('mail');
	const [searchFriends, setSearchFriends] = useState('');
	const [countryCode, setCountryCode] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [addFriendsButton, setAddFriendsButton] = useState(false);
	const [allFilled, setAllFilled] = useState(false);

	let addFriendsButtonColor = 'addFriendsButton' + (allFilled ? ' addFriendsButton-active' : '');


	useEffect(()=> {
		if(countryCode && searchFriends && phoneNumber !== '') {
			setAllFilled(true);
		} else {
			setAllFilled(false);
		}
	}, [countryCode, searchFriends, phoneNumber])

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



	const content = (
		<div className='addFriendsModal'>
			<h2 className='addFriendsModalTitle'>Add Friends</h2>
			<Menu className='addFriends' onClick={handleClick} selectedKeys={[current]} mode="horizontal">
				<Menu.Item key="mail">
					Contacts
				</Menu.Item>
				<Menu.Item key="sample">
					ID
				</Menu.Item>
			</Menu>
			{
				current === 'mail' ?
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
							<p>Enter a name and phone number.</p>
							<Button className={addFriendsButtonColor} disabled={!allFilled} >Add Friends</Button>

						</div>

					</>
					:
					<>safmaslndf</>
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
