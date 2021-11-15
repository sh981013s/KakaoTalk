import socketIOClient from 'socket.io-client';
import { useEffect, useState } from 'react';

const SocketTmpPage = () => {

	const socket = socketIOClient('localhost:4002')
	const [messageList, setMessageList] = useState([]);
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');

	const submit = () => {
		const msg = {name: name, message: message};
		socket.emit('send message',{name:name,message:message});
	}

	useEffect(()=>{
		socket.on('receive message',(tmp) => {
			console.log(tmp, 'received')
			setMessageList(messageList => messageList.concat(tmp));
		})
	},[])

	return (
		<div className='sex'>
			<div>
				<section>
					{
						messageList.map((item, i ) =>{
							return (
								<div key={i}>
									<p>{item.name.toUpperCase()}</p>
									<p>{item.message}</p>
								</div>
							)
						})
					}
				</section>
				<input
					type='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder='Name'
				/>
				<input
					type='text'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder='Message'
				/>
				<button
					type='submit'
					onClick={submit}
				>
					submit
				</button>
			</div>
		</div>
	);
};

export default SocketTmpPage;