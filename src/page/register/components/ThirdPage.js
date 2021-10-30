import { Input, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import { useState } from 'react';
import telCode from '../../../utils/telCode';
import {
  pageStepStore,
  userRegiInfoStore,
} from '../../../zustand/FriendsStore';

const ThirdPage = () => {
  const { setRegPage } = pageStepStore((state) => state);
  const { setUserInfo } = userRegiInfoStore((state) => state);
  const [userPhoneNum, setUserPhoneNum] = useState('');
  return (
    <div className='firstEntire'>
      <div className='third'>
        <h1>SeungKaoTalk</h1>
        <div className='thirdBox'>
          <div className='progressBar'>
            <div className='realBar' />
          </div>
          <h2>카카오계정 가입을 위해</h2>
          <h2>휴대폰 인증을 진행해 주세요.</h2>
          <div className='registerThirdPhoneInput'>
            <Select className='thirdCountry' style={{ width: 100 }}>
              {telCode.map((country) => (
                // eslint-disable-next-line react/jsx-key
                <Option value={country.dial_code}>
                  {country.dial_code} {country.name}
                </Option>
              ))}
            </Select>
            <Input
              placeholder='전화번호 입력'
              className='addFriendsPhone'
              onChange={(e) => setUserPhoneNum(e.target.value)}
            />
            <button
              type='submit'
              className='thirdCertificationBtn'
              onClick={() =>
                setUserInfo({
                  email: '',
                  pw: '',
                  name: '',
                  tel: userPhoneNum,
                  birth: '',
                  sex: '',
                })
              }
            >
              인증요청
            </button>
          </div>
          <button
            type='submit'
            className='agreeBtn'
            onClick={() => setRegPage(3)}
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

export default ThirdPage;
