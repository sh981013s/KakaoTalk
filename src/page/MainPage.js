import { useState } from 'react';
import Friends from '../component/contents/Friends';
import LeftMenu from '../component/LeftMenu';
import Header from '../component/Header';
import '../resources/css/mainpage/MainPage.scss';
import ChatListPage from './ChatListPage';
// import {getData} from '../utils/Api';

/**
 * @author Lee seung hwan
 * @date 2021.10.22
 * @description Friends | Chat | More를 관리하는 컴포넌트
 */
// eslint-disable-next-line react/prop-types
function MainPage({ match }) {
  // eslint-disable-next-line react/prop-types
  const { param } = match.params;
  const [searchText, setSearchText] = useState('');
  const [userList, setUserList] = useState([]);

  const receive = (props) => {
    setSearchText(props);
  };

  const pullData = (props) => {
    setUserList(props);
  };

  // eslint-disable-next-line consistent-return
  const selectPage = (page) => {
    // eslint-disable-next-line default-case
    switch (page) {
      case 'friends':
        return <Friends searchText={searchText} func={pullData} />;
      case 'chats':
        return <ChatListPage />;
      default:
        return <div>4044040404404040404040404040</div>;
    }
  };

  return (
    <div className='mainPage'>
      <div>
        {/* eslint-disable-next-line react/prop-types */}
        <Header receive={receive} userList={userList} type={param} />
        {/* eslint-disable-next-line react/prop-types */}
        {selectPage(param)}
      </div>
      <LeftMenu />
    </div>
  );
}

export default MainPage;
