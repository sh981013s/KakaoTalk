import { API_URL } from '../../utils/Api';
import { Button, Input, Menu, Select } from 'antd';
import telCode from '../../utils/telCode';
import { Option } from 'antd/es/mentions';
import { useState } from 'react';

const SearchMainContent = ({isExistById,searchInfo,searchByIdInputSave}) => {
	return (
		<div>asdasda</div>
	)
}

export const content = () => {
	const [current, setCurrent] = useState('contacts');
	const [searchFriends, setSearchFriends] = useState('');


	const handleClick = (e) => {
		setCurrent(e.key);
	};

	return (
		<div className='addFriendsModal'>
			<h2 className='addFriendsModalTitle'>Add Friends</h2>
			<Menu
				className='addFriends'
				onClick={handleClick}
				selectedKeys={[current]}
				mode='horizontal'
			>
				<Menu.Item key='contacts'>Contacts</Menu.Item>
				<Menu.Item key='ID'>ID</Menu.Item>
			</Menu>
			{current === 'contacts' ? (
				<>
					<div className='addFriendsContent'>
						<Input
							placeholder='Name'
							value={searchFriends}
							onChange={(e) => setSearchFriends(e.target.value)}
							suffix={
								// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
								<span
									onClick={() => {
										setSearchFriends('');
									}}
								>
                  <i className='fas fa-times-circle' />
                </span>
							}
						/>
						<div className='addFriendsFirstInput'>
							<Select
								className='addFriendsCountry'
								onChange={(e) => setCountryCode(e)}
								value={countryCode}
								style={{ width: 100 }}
							>
								{telCode.map((country) => (
									// eslint-disable-next-line react/jsx-key
									<Option value={country.dial_code}>
										{country.dial_code} {country.name}
									</Option>
								))}
							</Select>
							<Input
								placeholder='Phone Number'
								className='addFriendsPhone'
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
							/>
						</div>
						<p>{addFriendsModalDesc}</p>
						<Button
							className={addFriendsButtonColor}
							disabled={!allFilled}
							onClick={addFriendEventByContact}
						>
							Add Friends
						</Button>
					</div>
				</>
			) : (
				<>
					<div className='addFriendsContent'>
						<Input
							placeholder='KakakoTalk ID'
							value={searchFriendsById}
							onChange={(e) => setSearchFriendsById(e.target.value)}
							onPressEnter={searchById}
							suffix={
								// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
								<span onClick={addFriendsClearBtnFunc}>
                  <i className='fas fa-times-circle' />
                </span>
							}
						/>
						{/* <p>{ addFriendsModalDesc }</p> */}
						{searchByIdContent}
						<Button
							className={addFriendsButtonColor}
							disabled={!allFilled}
							onClick={addFriendEventById}
						>
							{/* eslint-disable-next-line no-nested-ternary */}
							{fdSwitch ? 'Add Friends' :  (searchInfo.uid === myInfo.uid ? '1:1 chat' : "it's me" )}
						</Button>
					</div>
				</>
			)}
		</div>
	);

}


