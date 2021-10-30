// import { useState } from 'react';
/* import Friends from '../component/contents/Friends';
import LeftMenu from '../component/LeftMenu'; */
// import Header from '../component/Header';
import '../resources/css/mainpage/MainPage.scss';
import basic from '../resources/img/basic_profile.jpg';
// import {getData} from '../utils/Api';

/**
 * @author Lee seung hwan
 * @date 2021.10.22
 * @description Friends | Chat | More를 관리하는 컴포넌트
 */
function ChatListPage() {
  return (
    <div className='chatList'>
      <div className='userComponent'>
        <img
          src={basic}
          alt='lol'
          className='userComponentAvatar userComponentAvatarXl'
        />
        <div className='chatListDetails'>
          <div className='userComponentName'>
            <h4>Robot1</h4>
          </div>
          <div className='userComponentDesc'>
            <h5 className='chatListMsg'>뭐하냐</h5>
          </div>
        </div>
        <div className='chatListStatus'>
          <div>9:14 PM</div>
          <div>55</div>
        </div>
      </div>
      <div className='userComponent'>
        <img
          src={basic}
          alt='lol'
          className='userComponentAvatar userComponentAvatarXl'
        />
        <div className='chatListDetails'>
          <div className='userComponentName'>
            <h4>Robot2</h4>
          </div>
          <div className='userComponentDesc'>
            <h5 className='chatListMsg'>안녕</h5>
          </div>
        </div>
        <div className='chatListStatus'>
          <div>9:14 PM</div>
        </div>
      </div>
      <div className='userComponent'>
        <img
          src={basic}
          alt='lol'
          className='userComponentAvatar userComponentAvatarXl'
        />
        <div className='chatListDetails'>
          <div className='userComponentName'>
            <h4>Robot3</h4>
          </div>
          <div className='userComponentDesc'>
            <h5 className='chatListMsg'>빠이</h5>
          </div>
        </div>
        <div className='chatListStatus'>
          <div>9:12 PM</div>
          <div>55</div>
        </div>
      </div>
    </div>
  );
}

export default ChatListPage;
