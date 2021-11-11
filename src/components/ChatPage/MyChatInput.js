import '../../resources/css/base/styles.scss'

const MyChatInput = () => {


	const handleKeyDown = (e) => {
		const keyCode = e.which || e.keyCode;

		// 13 represents the Enter key
		if (keyCode === 13 && !e.shiftKey) {
			e.preventDefault();
		}
	}


	return (
		<div className='entireChatInput'>
			<div className='chatInputIconBox'>
				<i className="far fa-smile" />
				<i className="fas fa-paperclip" />
				<i className="far fa-clipboard" />
			</div>
			<div className='chatInputBox'>
				<textarea className='chatInput' name="Text1" cols="40" rows="5"onKeyDown={handleKeyDown}></textarea>
				<button className='chatInputBtn'>Send</button>
			</div>
		</div>
	)
}



export default MyChatInput;