import { Input } from 'antd';
import { useState } from 'react';
import {
  pageStepStore,
  userRegiInfoStore,
} from '../../../zustand/FriendsStore';

const FourthPage = () => {
  const { setRegPage } = pageStepStore((state) => state);
  const { userInfo, setUserInfo } = userRegiInfoStore((state) => state);
  const [userEmail, setUserEmail] = useState('');

  return (
    <div className='firstEntire'>
      <div className='third'>
        <h1>SeungKaoTalk</h1>
        <div className='thirdBox'>
          <div className='progressBar'>
            <div className='realBar' />
          </div>
          <h2>카카오계정으로 사용할</h2>
          <h2>카카오 메일을 만들어 주세요</h2>
          <div className='registerThirdPhoneInput'>
            <Input
              placeholder='아이디 입력'
              className='addFriendsPhone'
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <button type='submit' className='thirdCertificationBtn'>
              @kako.com
            </button>
          </div>
          <ul className='fourthList'>
            <li>입력한 카카오메일로 카카오계정에 로그인할 수 있습니다.</li>
            <li>
              한번 만든 카카오메일은 변경할 수 없으니, 오타가 없도록 신중히
              확인해 주세요.
            </li>
            <li>
              생성한 카카오메일로 카카오 계정과 관련한 알림을 받아볼 수
              있습니다.
            </li>
          </ul>
          <button
            type='submit'
            className='agreeBtn'
            onClick={() => {
              setRegPage(4);
              setUserInfo({
                ...userInfo,
                email: userEmail,
              });
            }}
          >
            다음
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

export default FourthPage;
