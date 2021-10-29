import { Checkbox } from 'antd';

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
  </>
);

export default Register;
