import styled from "styled-components";
import '../resources/css/mainpage/MainPage.scss';
import { useEffect, useState } from 'react';
import { getData } from '../utils/Api';


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
		(
			<div className='mainWrap'>
				<div className='userCard'>
					<CardTop>
						<TopText>
							<TopName>
								<p>{me.name}</p>
							</TopName>
							<TopEmail>
								<p>{me.email}</p>
							</TopEmail>
						</TopText>
					</CardTop>
					<CardBtm>
						<BtmText>
							<p>My Subscription</p>
							<p>icon</p>
						</BtmText>
					</CardBtm>
				</div>
			</div>
		)
	)

}

const CardTop = styled.div`
	width: 100%;
	height: 80%;
	`;

const TopText = styled.div`
`;

const TopName = styled.div`
`;

const TopEmail = styled.div`
`;

const CardBtm = styled.div`
`;

const BtmText = styled.div`
`;



export default MorePage