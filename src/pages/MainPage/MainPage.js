import { useState } from 'react';
import Friends from '../../components/FriendsPage/Friends';
import LeftMenu from '../../components/MainPage/LeftMenu';
import Header from '../../components/MainPage/Header';
import '../../resources/css/mainpage/MainPage.scss';
import ChatListPage from '../ChatListPage/ChatListPage';
import MorePage from '../MorePage/MorePage';

/**
 * @author Lee seung hwan
 * @date 2021.10.22
 * @description Friends | ChatWithMePage | More를 관리하는 컴포넌트
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
      case 'more':
        return <MorePage />;
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
