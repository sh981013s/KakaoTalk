import { Checkbox, Input, Select } from 'antd';
import { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Option } from 'antd/es/mentions';
import { pageStepStore, userRegiInfoStore } from '../../../zustand/FriendsStore';
import { getData } from '../../../utils/Api';
import { year, month, day } from '../../../utils/Date'

const SixthPage = () => {
	const { setRegPage } = pageStepStore((state) => state);
	const history = useHistory();
	const { userInfo, setUserInfo } = userRegiInfoStore((state) => state);
	const [birthDay, setBirthDay] = useState(
		{
			year: '',
			month: '',
			day: ''
		}
	);
	const [gender, setGender] = useState('');
	const [userName, setUserName] = useState('');

	const includeInfo = () => {
		const userBirthday = `${ birthDay.year }-${ birthDay.month }-${ birthDay.day }`;
		setUserInfo({...userInfo, birth: userBirthday, sex: gender, name: userName});
	}

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

					<p className='regiRow'>이름</p>
					<div className='registerThirdPhoneInput'>
						<Input placeholder='닉네임 입력' className='addFriendsPhone' onChange={(e)=>setUserName(e.target.value)}/>
					</div>
					<p className='regiRow'>생일</p>
					<div className='registerFourthPhoneInput'>
						<Select defaultValue='연도' onChange={(e)=>{setBirthDay({...birthDay, year: e.toString()})}} >
							{
								year.map((singleYear) => (
										<Option value={ singleYear } key={ singleYear }>{ singleYear }</Option>
									))
							}
						</Select>
						<Select defaultValue='월' onChange={(e)=>{setBirthDay({...birthDay, month: e.toString()})}}>
							{
								month.map((singleMonth) => (
									<Option value={ singleMonth } key={ singleMonth }>{ singleMonth }</Option>
								))
							}
						</Select>
						<Select defaultValue='일' onChange={(e)=>{setBirthDay({...birthDay, day: e})}}>
							{
								day.map((singleDay) => (
									<Option value={ singleDay } key={ singleDay }>{ singleDay }</Option>
								))
							}
						</Select>
						<Checkbox disabled='true'>음력</Checkbox>
					</div>
					<p className='regiRow'>성별</p>
					<ul className='regiGender'>
						<li>
							<Checkbox onClick={()=>setGender('male')}>남성</Checkbox>
						</li>
						<li>
							<Checkbox value='female' onClick={()=>setGender('female')}>여성</Checkbox>
						</li>
						<li>
							<Checkbox>선택안함</Checkbox>
						</li>
					</ul>
					<button
						type='submit'
						className='agreeBtn'
						onClick={async () => {
							includeInfo();
							const resultData = await getData.post('member/signup', userInfo)
							if(resultData.data.resultType === 'success'){
								setRegPage(0);
								alert('회원가입을 완료했습니다!')
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
