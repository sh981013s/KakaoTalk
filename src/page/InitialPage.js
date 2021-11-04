import { Input, Checkbox } from 'antd';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import mainImg from '../resources/img/kakaoLoginMain.png';
import { getData } from '../utils/Api';

const InitialPage = () => {
  const history = useHistory();
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [allFilled, setAllFilled] = useState(false);
  const [isValidInput, setIsValidInput] = useState(true);

  useEffect(() => {
    if (emailInput !== '' && passwordInput.length > 3) {
      setAllFilled(true);
    } else {
      setAllFilled(false);
    }
  }, [emailInput, passwordInput, allFilled]);

  const loginBtnClassNames = ['loginDisabled', 'loginActive'];

  const getLogin = async () => {
    const parameter = {
      email: emailInput,
      pw: passwordInput,
    };
    const resultData = await getData.post('member/signin', parameter);
    localStorage.setItem('token', resultData.data.accessToken);
    if (resultData.data.resultType === 'success') {
      history.push('mainpage/friends');
    } else {
      setIsValidInput(false);
    }
  };

  return (
    <div className='loginPage'>
      <div className='yellowBox'>
        <div className='loginMain'>
          <div className='loginImage'>
            <img src={mainImg} alt='lol' />
          </div>
          <div className='inputBox'>
            <Input
              placeholder='Email or Phone Number'
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <Input
              placeholder='Password'
              type='password'
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            {
              isValidInput
              ? null
                : <p style={{color:'red', marginTop:'1rem'}}>Invalid Email / Password</p>
            }
          </div>
          {
            allFilled ?
              <button
                className={loginBtnClassNames[1]}
                type='submit'
                onClick={getLogin}
              >
                Login
              </button>
              :           <button
                className={loginBtnClassNames[0]}
                type='submit'
                onClick={getLogin}
                disabled
              >
                Login
              </button>
          }
          <div className='desc'>
            <Checkbox />
            <p>Keep me logged in</p>
          </div>
          <div className='register'>
            <Link to='/register'>
              <p>Create a KakaoTalk Account</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialPage;
