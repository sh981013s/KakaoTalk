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
	const [addFriends, setAddFriends] = useState(false);
	const [current, setCurrent] = useState('mail');
	const [serachFriends, setSerachFriends] = useState('');
	const [countryCode, setCountryCode] = useState('');


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


	console.log(telCode);

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
							<Input value={serachFriends} onChange={(e) => setSerachFriends(e.target.value)} suffix={<span onClick={()=>{setSerachFriends('')}}><i
								className="fas fa-times-circle"></i></span>}/>
							<Select defaultValue='+82' style={{width:100}}>
								{ telCode.map((country) => {
									return (<Option>{country.dial_code} {country.name}</Option>)
								}) }
							</Select>

						</div>

					</>
					:
					<>safmaslndf</>
			}
		</div>
	);



	return (

/*		        <div>
            <SearchIcon onClick={() => setTrigger(!trigger)}/>
            <UserAddOutlined style={{fontSize: 40}} onClick={() => setShowModal(true)}/>
            {trigger && <>
                <Input placeholder="Basic usage" style={{width: '50%'}} onChange={(e) => {
                    setText(e.target.value)
                }}/>
                <CloseOutlined onClick={() => setTrigger(false)} style={{cursor: 'pointer'}}/>
            </>
            }
            <KakaoModal showModal={showModal} contents={'아 좋아'}/>
        </div>*/
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
				addFriends
				? <div>asdasdsa</div>

					// <div className='friendsModal'>
					// 	<input className="radio" id="one" name="group" type="radio" checked />
					// 		<input className="radio" id="two" name="group" type="radio" />
					// 			<input className="radio" id="three" name="group" type="radio" />
					// 	<h2>Add Friends</h2>
					// 	<div className='friendsAddSelect'>
					// 		<div className='friendsAddSelectContacts'>
					// 			Contacts
					// 		</div>
					// 		<div className='friendsAddSelectId'>
					// 			ID
					// 		</div>
					// 	</div>
					// 	<div className='namePhone'>
					// 		<input className='name' type='text' placeholder='Name' />
					// 		<input className='phone' type='phone' placeholder='Phone Number'/>
					// 	</div>
					// 	<p className='friendsAddInstruction'>Enter a name and phone number</p>
					// 	<div className='addFriendsBtnBox'>
					// 		<button className='addFriendsBtn'>Add Friends</button>
					// 	</div>
					// </div>
					: null
			}

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
