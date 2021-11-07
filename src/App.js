import './resources/css/base/styles.scss';
// import './resources/css/initialpage/initialpage.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import MainPage from './page/MainPage';
import ChatListPage from './page/ChatListPage';
import InitialPage from './page/InitialPage';
import 'antd/dist/antd.css';
import Login from './page/account/Login';
import BirthFriends from './page/BirthFriends';
import Chat from './component/contents/Chat';
import Register from './page/register/Register';
import { getData } from './utils/Api';
import { myInfoStore } from './zustand/FriendsStore';


/**
 * @author Lee seung hwan
 * @description
 */

function App() {
  const { setMyInfo } = myInfoStore((state) => state);

  const getInfo = async () => {
      const tokenValue = localStorage.getItem('token');
      const parameter = {
      token: tokenValue,
    };
    const myInfo = await getData.get('member/me', { params: parameter });
    setMyInfo(myInfo.data.userInfo[0]);
    console.log(myInfo)
  };

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={InitialPage} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/mainpage/:param' component={MainPage} />
          <Route exact path='/chatList' component={ChatListPage} />
          <Route exact path='/birthFriends' component={BirthFriends} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/chat/:param' component={Chat} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
