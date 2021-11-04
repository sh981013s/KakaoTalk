// Profile 컴포넌트


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
const Tester = ({ type }) => (
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
          <div>
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
  );
