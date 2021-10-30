import { Checkbox, Input, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import telCode from '../../utils/telCode';

const Register = () => (
  <>
    <div className='firstEntire'>
      <div className='firstContents'>
        <div className='first'>
          <h1>SeungKaoTalk</h1>
          <div className='firstBox'>
            <h2>가입을 시작합니다!</h2>
            <h3>카카오 계정 하나로</h3>
            <h3>다양한 서비스를 편리하게 이용해 보세요!</h3>
            <h4>카카오 계정으로 사용할 이메일이 있나요?</h4>
            {/* eslint-disable-next-line react/button-has-type */}
            <button>새 이메일이 필요합니다.</button>
            <p>사용 중인 Daum 아이디가 있다면,</p>
            <p>로그인하여 새로운 카카오계정을 만들 수 있어요.</p>
            <p>Daum 아이디로 카카오계정 가입</p>
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
    </div>

    <div className='firstEntire'>
      <div className='firstContents'>
        <div className='second'>
          <h1>SeungKaoTalk</h1>
          <div className='secondBox'>
            <div className='progressBar'>
              <div className='realBar' />
            </div>
            <h2>카카오 계정</h2>
            <h2>서비스 약관에 동의해 주세요.</h2>
            <div className='firstCheckbox'>
              <Checkbox />
              <p className='checkboxText'>모두 동의합니다.</p>
            </div>
            <div className='secondDesc'>
              <p>
                전체 동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며,
                개별적으로도 동의를 선택하실 수 있습니다. 선택항목에 대한 동의를
                거부하시는 경우에도 서비스는 이용이 가능합니다.
              </p>
            </div>
            <hr />
            <div className='firstCheckbox'>
              <Checkbox />
              <p className='checkboxText'>만 14세 이상입니다.</p>
            </div>
            <div className='otherCheckbox'>
              <Checkbox />
              <p className='otherCheckboxText'>[필수] 카카오계정 약관</p>
              <div className='checkboxIcon'>
                <i className='fas fa-chevron-right' />
              </div>
            </div>
            <div className='otherCheckbox'>
              <Checkbox />
              <p className='otherCheckboxText'>[필수] 카카오 통합서비스 약관</p>
              <div className='checkboxIcon'>
                <i className='fas fa-chevron-right' />
              </div>
            </div>
            <div className='secondDesc'>
              <p>
                본 약관은 회사가 제공하는 카카오, Daum 서비스 등에 공통
                적용되며, 본 약관에 동의함으로써 해당 서비스들을 별도 이용계약
                체결 없이 이용할 수 있습니다.
              </p>
            </div>
            <div className='otherCheckbox'>
              <Checkbox />
              <p className='otherCheckboxText'>
                [선택] 카카오알림 채널 추가 및 광고메시지 수신
              </p>
              <div className='checkboxIcon'>
                <i className='fas fa-chevron-right' />
              </div>
            </div>
            <div className='otherCheckbox'>
              <Checkbox />
              <p className='otherCheckboxText'>
                [필수] 개인정보 수집 및 이용 동의
              </p>
              <div className='checkboxIcon'>
                <i className='fas fa-chevron-right' />
              </div>
            </div>
            <div className='otherCheckbox'>
              <Checkbox />
              <p className='otherCheckboxText'>
                [선택] 위치정보 수집 및 이용 동의
              </p>
              <div className='checkboxIcon'>
                <i className='fas fa-chevron-right' />
              </div>
            </div>
            <div className='otherCheckbox'>
              <Checkbox />
              <p className='otherCheckboxText'>
                [선택] 프로필정보 추가 수집 동의
              </p>
              <div className='checkboxIcon'>
                <i className='fas fa-chevron-right' />
              </div>
            </div>
            <button type='submit' className='agreeBtn'>
              동의
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
    </div>

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
            <Input placeholder='전화번호 입력' className='addFriendsPhone' />
            <button type='submit' className='thirdCertificationBtn'>
              인증요청
            </button>
          </div>
          <button type='submit' className='agreeBtn'>
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
            <Input placeholder='아이디 입력' className='addFriendsPhone' />
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
          <button type='submit' className='agreeBtn'>
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

    <div className='firstEntire'>
      <div className='third'>
        <h1>SeungKaoTalk</h1>
        <div className='fourthBox'>
          <div className='progressBar'>
            <div className='realBar' />
          </div>
          <h2 className='regiTitle'>카카오계정 로그인에 사용할</h2>
          <h2 className='regiTitle'>비밀번호를 등록해 주세요.</h2>

          <p className='regiRow'>카카오계정</p>
          <p className='regiUsername'>sh981013@kakao.com</p>

          <p className='regiRow'>비밀번호</p>
          <div className='registerThirdPhoneInput'>
            <Input
              placeholder='비밀번호 입력 (8~32자리)'
              className='addFriendsPhone'
            />
          </div>
          <div className='registerThirdPhoneInputSecond'>
            <Input placeholder='비밀번호 재입력' className='addFriendsPhone' />
          </div>
          <ul className='fourthList'>
            <li>
              비밀번호는 8~32자리의 영문 대소문자, 숫자, 특수문자를 조합하여
              설정해 주세요.
            </li>
            <li>
              다른 사이트에서 사용하는 것과 동일하거나 쉬운 비밀번호는 사용하지
              마세요.
            </li>
            <li>
              안전한 계정 사용을 위해 비밀번호는 주기적으로 변경해 주세요.
            </li>
          </ul>
          <button type='submit' className='agreeBtn'>
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
          <button type='submit' className='agreeBtn'>
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
  </>
);

export default Register;
