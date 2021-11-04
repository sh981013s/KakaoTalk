import '../resources/css/mainpage/MainPage.scss';
import { useEffect, useState } from 'react';
import { getData } from '../utils/Api';
import walletIcon from '../resources/img/cardImg.png';


const MorePage = () =>  {
	const [me, setMe] = useState('');

	const getInfo = async () => {
		const tokenValue = localStorage.getItem('token');
		const parameter = {
			token: tokenValue,
		};
		// eslint-disable-next-line no-shadow
		const myInfo = await getData.get('member/me', { params: parameter });
		setMe(myInfo.data.userInfo[0]);
	};

	useEffect(()=>{
		getInfo();
	},[])
	return (
		<div className='mainWrap'>
			<div className='userCard'>
				<div className='cardTop'>
					<div className='cardTopDesc'>
						<div className='cardTopDescText'>
							<h2>{me.name}</h2>
							<p>{me.email}</p>
						</div>
					</div>
					<div className='cardTopDescIcon'>
						<img src={walletIcon} alt='WalletIcon' />
					</div>
				</div>
				<hr/>
				<div className='cardBtm'>
					<p>My Subscription</p>
					<i className="fas fa-chevron-right" />
				</div>
			</div>
			<ul className='moreIconBox'>
				<li>
					<div className='iconSingleBox'>
						<i className="far fa-envelope" />
						<p>Mail</p>
					</div>
				</li>
				<li>
					<div className='iconSingleBox'>
						<i className="far fa-calendar-check" />
						<p>Calender</p>
					</div>
				</li>
				<li>
					<div className='iconSingleBox'>
						<i className="fas fa-inbox" />
						<p>Talk Drive</p>
					</div>
				</li>
				<li>
					<div className='iconSingleBox'>
						<i className="far fa-grin-wink" />
						<p>Emoticon</p>
					</div>
				</li>
				<li>
					<div className='iconSingleBox'>
						<i className="fas fa-tv" />
						<p>TV</p>
					</div>
				</li>
				<li>
					<div className='iconSingleBox'>
						<i className="fas fa-gifts" />
						<p>Gift</p>
					</div>
				</li>
				<li>
					<div className='iconSingleBox'>
						<i className="fas fa-bullhorn" />
						<p>Notices</p>
					</div>
				</li>
				<li>
					<div className='iconSingleBox'>
						<i className="fas fa-flask" />
						<p>Kakao Lab</p>
					</div>
				</li>
				<li>
					<div className='iconSingleBox'>
						<i className="fas fa-cog" />
						<p>Settings</p>
					</div>
				</li>
				<li>
					<div className='iconSingleBox'>
						<i className="far fa-question-circle" />
						<p>Help</p>
					</div>
				</li>
			</ul>
			<hr/>
			<div className='versionInfo'>
				<i className="fas fa-info-circle" />
				<p>KakaoTalk Info</p>
				<p>ver. 2.9.6</p>
			</div>
		</div>
	)

}





export default MorePage