import { useEffect, useState } from 'react';
import kakaoChat from '../../resources/img/kakaoChat.png';
import blank from '../../resources/img/blank.png';
import { getData } from '../../utils/Api';

const Chat = (props) => {
  // eslint-disable-next-line react/prop-types
  const {match} = props;


 const getChatList = async () => {
   const parameter = {
     // eslint-disable-next-line react/prop-types
     uid: match.params.param
   }
   await getData.post('chat/getChatlist', parameter).then(res=>console.log(res,'::::'))
 }
useEffect(()=>{
  getChatList();
},[])

  const sendMessage = async () => {
    const parameter = {
      // eslint-disable-next-line react/prop-types
      uid: match.params.param,
      contents: 'a ssi pal'
    }
    await getData.post('chat/addChat', parameter)
  }

  const [sample, setSample] = useState([
    { name: 'beom', contents: 'hi', time: '21:27', profile: 'beom' },
    { name: 'beom', contents: 'howRu', time: '21:27', profile: 'beom' },
    { name: 'me', contents: 'kinda', time: '21:28', profile: 'me' },
    { name: 'me', contents: 'good', time: '21:28', profile: 'me' },
    { name: 'me', contents: 'how', time: '21:29', profile: 'me' },
    { name: 'me', contents: 'boutU', time: '21:29', profile: 'me' },
    { name: 'beom', contents: 'damn', time: '21:31', profile: 'beom' },
    { name: 'beom', contents: 'notBad', time: '21:31', profile: 'beom' },
    { name: 'beom', contents: 'for sure', time: '21:31', profile: 'beom' },
    { name: 'me', contents: 'cool', time: '21:31', profile: 'me' },
    { name: 'beom', contents: 'ok', time: '21:33', profile: 'beom' },
    { name: 'beom', contents: 'bye', time: '21:34', profile: 'beom' },
  ]);

  const sampleData = (data) =>
    data.reduce(
      (acc, cur) => {
        if (cur === sample[0]) {
          return acc;
        }
        if (
          acc[acc.length - 1].name === cur.name &&
          acc[acc.length - 1].time === cur.time
        ) {
          const popData = acc.pop();
          if (typeof popData.contents === 'string') {
            // single
            // console.log('single', '--------------------', cur);
            return [
              ...acc,
              {
                name: cur.name,
                contents: [popData.contents, cur.contents],
                time: cur.time,
                profile: cur.profile,
              },
            ];
          }
          // already multiple
          // console.log('multiple', '--------------------', cur);
          return [
            ...acc,
            {
              name: cur.name,
              contents: [...popData.contents, cur.contents],
              time: cur.time,
              profile: cur.profile,
            },
          ];
        }
        // console.log('diff', '--------------------', cur);
        return [...acc, cur];
      },
      [data[0]]
    );

  const today = new Date();
  let time = `${today.getHours()}:${today.getMinutes()}`;
  if (today.getMinutes() < 10) {
    time = `${today.getHours()}:${+0}${today.getMinutes()}`;
  }

  const [newData, dataChange] = useState(sampleData(sample));
  const [input, inputChange] = useState('');

  useEffect(() => {
    dataChange(sampleData(sample));
  }, [sample]);

  let last = '';

  return (
    <div className='chatScreen'>
      <div className='main'>
        <div className='mainChat'>
          {newData.map((e) => {
            if (e.name === 'beom') {
              if (typeof e.contents !== 'string') {
                return e.contents.map((f, idx) => {
                  if (idx === 0) {
                    return (
                      <div className='messageRow'>
                        <img src={kakaoChat} alt='profile' />
                        <div className='messageRowContent'>
                          <span className='messageAuthor'>{e.name}</span>
                          <div className='messageInfo'>
                            <span className='messageBubble'>
                              {e.contents[0]}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  if (idx === e.contents.length - 1) {
                    return (
                      <div className='messageRow'>
                        <img src={blank} alt='profile' />
                        <div className='messageRowContent'>
                          {/* <span className="messageAuthor">{e.name}</span> */}
                          <div className='messageInfo'>
                            <span className='messageBubble'>
                              {e.contents[e.contents.length - 1]}
                            </span>
                            <span className='messageTime'>21:27</span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div className='messageRow'>
                      <img src={blank} alt='profile' />
                      <div className='messageRowContent'>
                        {/* <span className="messageAuthor">{e.name}</span> */}
                        <div className='messageInfo'>
                          <span className='messageBubble'>
                            {e.contents[idx]}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                });
              }
              if (last.name === e.name) {
                last = e;
                return (
                  <div className='messageRow'>
                    <img src={blank} alt='profile' />
                    <div className='messageRowContent'>
                      <div className='messageInfo'>
                        <span className='messageBubble'>{e.contents}</span>
                        <span className='messageTime'>{e.time}</span>
                      </div>
                    </div>
                  </div>
                );
              }
              last = e;
              return (
                <div className='messageRow'>
                  <img src={kakaoChat} alt='profile' />
                  <div className='messageRowContent'>
                    <span className='messageAuthor'>{e.name}</span>
                    <div className='messageInfo'>
                      <span className='messageBubble'>{e.contents}</span>
                      <span className='messageTime'>{e.time}</span>
                    </div>
                  </div>
                </div>
              );
            }
            // 나라면
            if (typeof e.contents !== 'string') {
              return e.contents.map((f, idx) => {
                if (idx === e.contents.length - 1) {
                  return (
                    <div className='messageRow messageRowOwn'>
                      <div className='messageRowContent'>
                        <div className='messageInfo'>
                          <div className='messageBubble'>
                            {e.contents[e.contents.length - 1]}
                          </div>
                          <div className='messageTime'>{e.time}</div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className='messageRow messageRowOwn'>
                    <div className='messageRowContent'>
                      <div className='messageInfo'>
                        <div className='messageBubble'>{e.contents[idx]}</div>
                      </div>
                    </div>
                  </div>
                );
              });
            }
            return (
              // eslint-disable-next-line react/jsx-key
              <div className='messageRow messageRowOwn'>
                <div className='messageRowContent'>
                  <div className='messageInfo'>
                    <div className='messageBubble'>{e.contents}</div>
                    <div className='messageTime'>{e.time}</div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className='reply'>
            <div className='replyColumn'>
              <i className='far fa-plus-square fa-lg' />
            </div>

            <div className='replyColumn'>
              <input
                id='chatInput'
                type='text'
                placeholder='Write a message...'
                onChange={(e) => {
                  inputChange(e.target.value);
                }}
              />
              <i id='iconPush' className='far fa-grin fa-lg' />
              {/* eslint-disable-next-line react/button-has-type */}
              <button
                onClick={() =>{
                  sendMessage();
                {
                  setSample([
                    ...sample,
                    { name: 'me', contents: input, time, profile: 'me' },
                  ]);
                  const chatInput = document.querySelector('#chatInput');
                  chatInput.value = '';
                }
                  }}
              >
                <i className='fas fa-arrow-up' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
