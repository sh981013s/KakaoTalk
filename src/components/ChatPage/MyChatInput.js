import '../../resources/css/base/styles.scss'
import useInput from '../../hooks/useInput';
import { getData } from '../../utils/Api';
import { myChatStore } from '../../zustand/FriendsStore'


const MyChatInput = (props) => {
	const { myChat,setMyChat } = myChatStore((state)=> state)

	const [chatMsg, onChangeChatMsg, setChatMsg] = useInput('');

	const handleKeyDown = (e) => {
		const keyCode = e.which || e.keyCode;

		// 13 represents the Enter key
		if (keyCode === 13 && !e.shiftKey) {
			e.preventDefault();
			// console.log(props.uid.params.param, 'asd');
			sendMessage();
			setChatMsg('');
		}
	}


	const sendMessage = async () => {
		const parameter = {
			// eslint-disable-next-line react/prop-types
			uid: props.uid.params.param,
			contents: chatMsg
		}
		await getData.post('chat/addChat', parameter)
			.then(res => {
				setMyChat(res);
			})

	}

	return (
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
					value={chatMsg}
					onChange={onChangeChatMsg}
					onKeyDown={handleKeyDown}>
				</textarea>
				<button className='chatInputBtn'>Send</button>
			</div>
		</div>
	)
}



export default MyChatInput;