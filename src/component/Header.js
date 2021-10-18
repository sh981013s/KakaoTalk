import { CloseOutlined, UserAddOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useEffect, useState } from 'react';
import KakaoModal from './common/KakaoModal';
import { SearchIcon } from '../resources/styled/layout';
import {getData} from '../utils/Api';
import * as Friends from './contents/Friends';

function Header(props) {
	const [text, setText] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [trigger, setTrigger] = useState(false);
	const [addFriends, setAddFriends] = useState(false);


	const getSearchData = async () => {
	}

	useEffect(()=>{
		getSearchData()
	},[])

	useEffect(() => {
		props.receive(text);
	}, [text]);



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
					<span><i className="fas fa-user-plus fa-lg" onClick={() => {
						setAddFriends(!addFriends);
					}}></i></span>
				</div>
			</div>

			{
				addFriends
				? 			<div className='friendsModal'>
						<input className="radio" id="one" name="group" type="radio" checked />
							<input className="radio" id="two" name="group" type="radio" />
								<input className="radio" id="three" name="group" type="radio" />
						<h2>Add Friends</h2>
						<div className='friendsAddSelect'>
							<div className='friendsAddSelectContacts'>
								Contacts
							</div>
							<div className='friendsAddSelectId'>
								ID
							</div>
						</div>
						<div className='namePhone'>
							<input className='name' type='text' placeholder='Name' />
							<input className='phone' type='phone' placeholder='Phone Number'/>
						</div>
						<p className='friendsAddInstruction'>Enter a name and phone number</p>
						<div className='addFriendsBtnBox'>
							<button className='addFriendsBtn'>Add Friends</button>
						</div>
					</div>
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
