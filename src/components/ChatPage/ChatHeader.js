import { useEffect, useState } from 'react';
import { getData } from '../../utils/Api';
import '../../resources/css/base/styles.scss';

// eslint-disable-next-line react/prop-types
const ChatHeader = ({ match }) => {
	const [myInfo, setMyInfo] = useState({});

	const getMyInfo = async () => {
		const parameter = {
			uid: match.params.param
		};
		await getData.get('member/myinfo', { params: parameter })
			.then((res) => {
				setMyInfo(res.data[0]);
			});
	};


	useEffect(() => {
		getMyInfo();
	}, []);

	return (
		<div className='entireChatHeader'>
			<img
				src={`http://localhost:8080/img/${myInfo.pic}`}
				alt='lol'
				className='chatHeaderImg'
			/>
			<p>{myInfo.name}</p>
			<div className='ChatHeaderRight'>
				<input type='range' className='chatHeaderRange' />
				<div className='ChatIconBox'>
					<div className='iconBoxIcon'>
						<i className='fas fa-search' />
					</div>
					<div className='iconBoxIcon'>
						<i className='fas fa-bell' />
					</div>
					<div className='iconBoxIcon'>
						<i className='fas fa-box' />
					</div>
					<div className='iconBoxIcon'>
						<i className='fas fa-bars' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatHeader;