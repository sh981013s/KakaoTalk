import { Input, Checkbox } from 'antd';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mainImg from '../resources/img/kakaoLoginMain.png';

const InitialPage = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [allFilled, setAllFilled] = useState(false);

  useEffect(() => {
    if (emailInput && passwordInput !== '') {
      setAllFilled(true);
    } else {
      setAllFilled(false);
    }
  }, [emailInput, passwordInput, allFilled]);

  const loginBtnClassNames = ['loginDisabled', 'loginActive'];

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
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </div>
          <button
            className={
              allFilled ? loginBtnClassNames[1] : loginBtnClassNames[0]
            }
            type='submit'
          >
            Login
          </button>
          <div className='desc'>
            <Checkbox />
            <p>Keep me logged in</p>
          </div>
          <div className='register'>
            <Link to='/register'>
              <p>Create a SeungKaoTalk Account</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialPage;
