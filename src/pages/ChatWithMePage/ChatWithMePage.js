/* eslint-disable */
import { useEffect, useState } from 'react';
import '../../resources/css/base/styles.scss';

import _ from 'lodash';
import kakaoChat from '../../resources/img/kakaoChat.png';
import blank from '../../resources/img/blank.png';
import { getData } from '../../utils/Api';
import { myChatStore } from '../../zustand/FriendsStore'
import { checkIsUserLoggedIn } from '../../components/common/CheckIsUserLoggedIn';
import ChatHeader from '../../components/ChatPage/ChatHeader'
import MyChatInput from '../../components/ChatPage/MyChatInput'



const ChatWithMePage = (props) => {
  const { myChat, setMyChat } = myChatStore((state)=> state)

  const { match } = props;

  const getChatList = async () => {
    const parameter = {
      uid: match.params.param
    }
    await getData.post('chat/getMyChatlist', parameter)
      .then((res) => {
        setMyChat(res.data.list)
        console.log(res,'raw')
      })
  }


  const sendMessage = async () => {
    const parameter = {
      // eslint-disable-next-line react/prop-types
      uid: match.params.param,
      contents: 'a ssi pal'
    }
    await getData.post('chat/addChat', parameter)
  }


  useEffect(()=>{
    checkIsUserLoggedIn();
    getChatList();
  },[])

  return (
    <div className='chatScreen'>
      <ChatHeader match = {match} />
      <div className='chatMain'>
        {
          myChat.map((chat,idx)=>{
            if (typeof chat.time !== 'string') {
              return chat.time.map((single,idx)=>{
                if(idx === 0) {
                  return (
                    <>
                      <div className='chatHr'>{chat.date}</div>
                      <div className='messageRow messageRowOwn'>
                        <div className='messageRowContent'>
                          <div className='messageInfo'>
                            <div className='messageBubble'>{chat.contents[idx]}</div>
                            <div className='messageTime' />
                          </div>
                        </div>
                      </div>
                    </>
                  )
                } else {
                  return (
                    <div className='messageRow messageRowOwn'>
                      <div className='messageRowContent'>
                        <div className='messageInfo'>
                          <div className='messageBubble'>{chat.contents[idx]}</div>
                          <div className='messageTime'>{chat.time[idx]}</div>
                        </div>
                      </div>
                    </div>
                  )
                }
              })
            } else {
              return (
                <>
                  <div className='chatHr'>{chat.date}</div>
                  <div className='messageRow messageRowOwn'>
                    <div className='messageRowContent'>
                      <div className='messageInfo'>
                        <div className='messageBubble'>{chat.contents}</div>
                        <div className='messageTime'>{chat.time}</div>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          })
        }
      </div>
      <MyChatInput />
    </div>
  );
};

export default ChatWithMePage;