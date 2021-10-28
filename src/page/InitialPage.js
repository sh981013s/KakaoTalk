import { Input, Checkbox } from 'antd';
import mainImg from '../resources/img/kakaoLoginMain.png';

const InitialPage = () => (
  <div className='loginPage'>
    <div className='yellowBox'>
      <div className='loginMain'>
        <div className='loginImage'>
          <img src={mainImg} alt='lol' />
        </div>
        <div className='inputBox'>
          <Input placeholder='Email or Phone Number' />
          <Input placeholder='Password' />
        </div>
        <button className='login' type='submit'>
          Login
        </button>
        <div className='desc'>
          <Checkbox />
          <p>Keep me logged in</p>
        </div>
        <div className='register'>
          <p>Create a SeungKaoTalk Account</p>
        </div>
      </div>
    </div>
  </div>
);

export default InitialPage;
