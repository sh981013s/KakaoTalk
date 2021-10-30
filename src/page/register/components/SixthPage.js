import { Checkbox, Input, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { userRegiInfoStore } from '../../../zustand/FriendsStore';
import { getData } from '../../../utils/Api';

const SixthPage = () => {
	const history = useHistory();

	const { userInfo } = userRegiInfoStore((state) => state);

	useEffect(() => {
		console.log(userInfo, 'userInfo::::');
	}, [userInfo]);


	return (
		<div className='firstEntire'>
			<div className='third'>
				<h1>SeungKaoTalk</h1>
				<div className='fourthBox'>
					<div className='progressBar'>
						<div className='realBar' />
					</div>
					<h2 className='regiTitle'>카카오계정 프로필을</h2>
					<h2 className='regiTitle'>설정해 주세요.</h2>

					<p className='regiRow'>닉네임</p>
					<div className='registerThirdPhoneInput'>
						<Input placeholder='닉네임 입력' className='addFriendsPhone' />
					</div>
					<p className='regiRow'>생일</p>
					<div className='registerFourthPhoneInput'>
						<Select defaultValue='연도'>
							<Option>2021</Option>
							<Option>2022</Option>
						</Select>
						<Select defaultValue='월'>
							<Option>12</Option>
							<Option>11</Option>
							<Option>10</Option>
						</Select>
						<Select defaultValue='일'>
							<Option>31</Option>
							<Option>30</Option>
						</Select>
						<Checkbox>음력</Checkbox>
					</div>
					<p className='regiRow'>성별</p>
					<ul className='regiGender'>
						<li>
							<Checkbox>남성</Checkbox>
						</li>
						<li>
							<Checkbox>여성</Checkbox>
						</li>
						<li>
							<Checkbox>선택안함</Checkbox>
						</li>
					</ul>
					<button
						type='submit'
						className='agreeBtn'
						onClick={async () => {
							const resultData = await getData.post('member/signup', userInfo)
							if(resultData.data.resultType === 'success'){
								alert('회원가입이 되었습니다ㅣ.')
								history.push('/')
							}
						}}
					>
						확인
					</button>
				</div>
				<ul className='regiBottom'>
					<li>이용약관</li>
					<li>개인정보 처리방침</li>
					<li>운영정책</li>
					<li>고객센터</li>
					<li>공지사항</li>
					<li>한국어</li>
				</ul>
				<p className='regiBottomText'>
					Copyright SeungHwanLee. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default SixthPage;
