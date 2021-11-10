import { Input, Checkbox } from 'antd';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import mainImg from '../../resources/img/kakaoLoginMain.png';
import { getData } from '../../utils/Api';
import useInput from '../../hooks/useInput'
import CheckIsUserLoggedIn from '../../components/common/CheckIsUserLoggedIn';

const InitialPage = () => {
  const history = useHistory();
  const [allFilled, setAllFilled] = useState(false);
  const [isValidInput, setIsValidInput] = useState(true);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  useEffect(() => {
    if (email !== '' && password.length > 3) {
      setAllFilled(true);
    } else {
      setAllFilled(false);
    }
  }, [email, password]);

  const loginBtnClassNames = ['loginDisabled', 'loginActive'];

  const getLogin = async () => {
    const parameter = {
      email: email,
      pw: password,
    };
    const resultData = await getData.post('member/signin', parameter);
    localStorage.setItem('token', resultData.data.accessToken);
    if (resultData.data.resultType === 'success') {
      history.push('mainpage/friends');
    } else {
      setIsValidInput(false);
    }
  };



  useEffect(()=>{
    CheckIsUserLoggedIn();
  },[])

  return (
    <div className='loginPage'>
      <div className='yellowBox'>
        <div className='loginMain'>
          <div className='loginImage'>
            <img src={mainImg} alt='lol' />
          </div>
          <div className='inputBox'>
            <Input
              name='email'
              value={email}
              onChange={onChangeEmail}
              placeholder='Email or Phone Number'
              onPressEnter={getLogin}
            />
            <Input
              name='password'
              placeholder='Password'
              type='password'
              value={password}
              onChange={onChangePassword}
              onPressEnter={getLogin}
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
