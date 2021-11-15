import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import Chat from './Chat';
import { getData } from '../../utils/Api';

const socket = io.connect('http://localhost:4002');

const ChatWithFriend = (props) => {

	const [myInfo, setMyInfo] = useState('');
	const [friendUid, setFriendUid] = useState(0);
	const [friendInfo, setFriendInfo] = useState({});
	const [room, setRoom] = useState('');


	const getMyInfo = async () => {
		console.log('myInfoStart')
		const tokenValue = localStorage.getItem('token');
		const parameter = {
			token: tokenValue,
		};
		await getData.get('member/me', { params: parameter })
			.then(async(res)=>{
				await setMyInfo(res.data.userInfo[0])
			})
	};

	const getFriendInfo = async () => {
		const parameter = {
			uid: friendUid,
		};
		console.log(parameter,'secondparam')
		await getData.get('member/myInfo', { params: parameter })
			.then((res)=>{
				setFriendInfo(res.data[0])
				console.log(res.data[0],'res')
			})
	};


	const joinRoom = () => {
		// const room = props.match.params.param;
/*		if (!!myInfo.name && !!room) {
		}*/
		socket.emit('joinRoom', props.match.params.param);
		console.log('enter')
	}

	useEffect(()=>{
		const start = async() => {
			await joinRoom();
			await getMyInfo();
		}
		start();
	},[])

	useEffect(async()=>{
		if(myInfo !== '') {
			// getFriendInfo();
			setFriendUid(props.match.params.param - myInfo.uid);
		}
	},[myInfo])

	useEffect(()=>{
		if(friendUid !== 0) {
			getFriendInfo();
			setRoom(props.match.params.param);
		}
	},[friendUid])


	return (
		<Chat socket={socket} myInfo={myInfo} friendInfo={friendInfo} room={room}/>
	)
}

export default ChatWithFriend;