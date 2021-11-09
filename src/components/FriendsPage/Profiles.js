import { Popover } from 'antd';
import ProfilePopover from './ProfilePopover';
import { myInfoStore } from '../../zustand/FriendsStore';
import { Fragment } from 'react';

export const MyProfileList = () => {
	const { myInfo } = myInfoStore((state) => state);
	const openChatWithMe = () => {
		window.open(
			`/chatwithme`,
			'네이버새창',
			'width=500, height=800, toolbar=no, menubar=no, scrollbars=no, resizable=yes'
		);
	};

	return(
		<Fragment>
			<div className='userComponent' onDoubleClick={openChatWithMe}>
				<Popover
					placement='left'
					overlayClassName='profileOverall'
					content={ProfilePopover(myInfo, 'me')}
					trigger='click'
				>
					<img
						src={`http://localhost:8080/img/${myInfo.pic}`}
						alt='lol'
						className='userComponentAvatar userComponentAvatarXl'
					/>
				</Popover>
				<div className='userComponentDetails'>
					<div className='userComponentName'>
						<h4>{myInfo.name}</h4>
					</div>
					<div className='userComponentDesc'>
						<h5>{myInfo.state}</h5>
					</div>
				</div>
			</div>
			<hr />
		</Fragment>
)
}

export const FriendList = ({ friend }) => {
	const { myInfo } = myInfoStore((state) => state);

	const openChat = () => {
		window.open(
			`/chat/${myInfo.uid}`,
			'네이버새창',
			'width=500, height=800, toolbar=no, menubar=no, scrollbars=no, resizable=yes'
		);
	};

	return (
		<div className='userComponent' onDoubleClick={openChat}>
			<Popover
				placement='left'
				overlayClassName='profileOverall'
				content={ProfilePopover(friend, 'friends')}
				trigger='click'
			>
				<img
					src={`http://localhost:8080/img/${friend.pic}`}
					alt='lol'
					className='userComponentAvatar userComponentAvatarXl'
				/>
			</Popover>
			<div className='userComponentDetails'>
				<div className='userComponentName'>
					<h4>{friend.name}</h4>
				</div>
				<div className='userComponentDesc'>
					<h5>{friend.state}</h5>
				</div>
			</div>
		</div>
	)
}
