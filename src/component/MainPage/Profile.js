// Profile 컴포넌트


// eslint-disable-next-line react/prop-types
import { myInfoStore } from '../../zustand/FriendsStore';

// eslint-disable-next-line react/prop-types
export default function Profile({ name, state, pic }, type) {

  return (
    <>
      <div className='profileEntire'>
        <div className='profileHeader'>
          <i className='far fa-user-circle' />
          <i className='far fa-star' />
        </div>
        <div className='profileInfo'>
          <div className='profileImg'>
            <img
              src={`http://localhost:8080/img/${pic}`}
              alt='lol'
              className='userComponentAvatar userComponentAvatarXl'
            />
          </div>
          <h2>{name}</h2>
          {state ? <p>{state}</p> : null}
        </div>
        <hr />
      </div>
      <Tester type={type} />
    </>
  );
}

// eslint-disable-next-line react/prop-types
const Tester = ({ type }) => {
  const { myInfo } = myInfoStore((states) => states);

  const openChat = () => {
    window.open(
      `/chat/${myInfo.uid}`,
      '네이버새창',
      'width=500, height=800, toolbar=no, menubar=no, scrollbars=no, resizable=yes'
    );
  };

  return (
    <>
      {type === 'friends' ? (
        <div className='profileAction'>
          <div>
            <i className='fas fa-comment' />
            1:1 Chat
          </div>
          <div>
            <i className='fas fa-phone-alt' />
            Call
          </div>
          <div>
            <i className='fas fa-comment-alt' />
            KakaoStory
          </div>
        </div>
      ) : (
        <div className='profileAction'>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div onClick={openChat}>
            <i className='fas fa-comment' />
            <p style={{fontSize: 12, marginTop:5}}>My Chatroom</p>
          </div>
          <div>
            <i className="fas fa-pencil-alt" />
            <p style={{fontSize: 12, marginTop:5}}>Edit Profile</p>
          </div>
          <div>
            <i className='fas fa-comment-alt' />
            <p style={{fontSize: 12, marginTop:5}}>KakaoStory</p>
          </div>
        </div>
      )}
    </>
  )
}


