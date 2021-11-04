import { pageStepStore } from '../../../zustand/FriendsStore';

const FirstPage = () => {
  const { setRegPage } = pageStepStore((state) => state);

  return (
    <div className='firstEntire'>
      <div className='firstContents'>
        <div className='first'>
          <h1>KakaoTalk</h1>
          <div className='firstBox'>
            <h2>가입을 시작합니다!</h2>
            <h3>카카오 계정 하나로</h3>
            <h3>다양한 서비스를 편리하게 이용해 보세요!</h3>
            <h4>카카오 계정으로 사용할 이메일이 있나요?</h4>
            <button type='button' onClick={() => setRegPage(1)}>
              새 이메일이 필요합니다.
            </button>
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
  );
};

export default FirstPage;
