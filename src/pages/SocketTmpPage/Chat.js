import { useEffect, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import kakaoChat from '../../resources/img/kakaoChat.png';

const Chat = ({socket, myInfo, friendInfo, room}) => {

	console.log(room,'props')

	const [currentMessage, setCurrentMessage] = useState('');
	const [messageList, setMessageList] = useState([]);

	const sendMessage = async () => {
		if (currentMessage !== '') {
			const messageData = {
				room: room,
				uid: myInfo.uid,
				author: myInfo.name,
				message: currentMessage,
				time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
			};

			await socket.emit('sendMessage', messageData);
			// setMessageList([...messageList, messageData]);
		}
	}

	useEffect(()=>{
/*		socket.on('receiveMessage', (data) => {
			console.log(data,'received')
			setMessageList([...messageList, data]);
			// console.log(messageList,'msglist')
		})*/
		socket.on('receiveMessage',(tmp) => {
			console.log(tmp, 'received')
			setMessageList(messageList => messageList.concat(tmp));
		})
	}, [])

	return (
		<div className='chatScreen'>

			<div className='entireChatHeader'>
				<img
					src={`http://localhost:8080/img/${friendInfo.pic}`}
					alt='lol'
					className='chatHeaderImg'
				/>
				<p>{friendInfo.name}</p>
				<div className='ChatHeaderRight'>
					<input type='range' className='chatHeaderRange' />
					<div className='ChatIconBox'>
						<div className='iconBoxIcon'>
							<i className="fas fa-search" />
						</div>
						<div className='iconBoxIcon'>
							<i className="fas fa-bell" />
						</div>
						<div className='iconBoxIcon'>
							<i className="fas fa-box" />
						</div>
						<div className='iconBoxIcon'>
							<i className="fas fa-bars" />
						</div>
					</div>
				</div>
			</div>

			<div className='chatMain'>
				{

					messageList ?
						messageList.map((singleChat, idx) => {
							if(singleChat.uid === friendInfo.uid) {
								return (
									<div key={idx} className='messageRow'>
										<img
											src={`http://localhost:8080/img/${friendInfo.pic}`}
											alt='profile'
										/>
										<div className='messageRowContent'>
											<span className='messageAuthor'>{singleChat.author}</span>
											<div className='messageInfo'>
												<span className='messageBubble'>{singleChat.message}</span>
												<span className='messageTime'>{singleChat.time}</span>
											</div>
										</div>
									</div>
								)
							} else {
								return (
									<div key={idx} className='messageRow messageRowOwn'>
										<div className='messageRowContent'>
											<div className='messageInfo'>
												<div className='messageBubble'>{singleChat.message}</div>
												<div className='messageTime'>{singleChat.time}</div>
											</div>
										</div>
									</div>
								);
							}
						})
						: null
				}
			</div>


{/*			<div className='chatFooter'>
				<input
					type='text'
					placeholder='Hey....'
					onChange={(e)=>setCurrentMessage(e.target.value)}
				/>
				<button onClick={sendMessage}>&#9658;</button>
			</div>*/}

			<div className='entireChatInput'>
				<div className='chatInputIconBox'>
					<i className="far fa-smile" />
					<i className="fas fa-paperclip" />
					<i className="far fa-clipboard" />
				</div>
				<div className='chatInputBox'>
				<textarea
					className='chatInput'
					name="chatMsg"
					cols="40"
					rows="5"
					value={currentMessage}
					onChange={(e)=>setCurrentMessage(e.target.value)}
					// onKeyDown={handleKeyDown}
				>
				</textarea>
					{
						!!currentMessage ?
							<button
								className='chatInputBtnActive'
								onClick={()=>{
									sendMessage();
									setCurrentMessage('');
								}}
							>
								Send
							</button>
							:  <button className='chatInputBtnInActive'>Send</button>

					}
				</div>
			</div>
		</div>


	)
}

export default Chat;