import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useStore } from '../zustand/FriendsStore';

function LeftMenu() {
  const [mutedState, setMutedState] = useState(false);
  // const { friendsLists, friendsWhoseBirthdayIsToday } = useStore(
  //   (state) => state
  // );

  const muteSingle = (elem) => {
    // eslint-disable-next-line no-param-reassign
    elem.muted = true;
    elem.pause();
  };

  const unMuteSingle = (elem) => {
    // eslint-disable-next-line no-param-reassign
    elem.muted = false;
    elem.play();
  };

  const muteAllFunc = () => {
    document
      .querySelectorAll('video, audio')
      .forEach((elem) => muteSingle(elem));
  };

  const unMuteAllFunc = () => {
    document
      .querySelectorAll('video, audio')
      .forEach((elem) => unMuteSingle(elem));
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    mutedState ? muteAllFunc() : unMuteAllFunc();
  }, [mutedState]);

  return (
    <nav className='leftMenu'>
      <ul className='navList'>
        <li className='navTop'>
          <li className='navFriend'>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className='navLink'>
              <Link to='/mainpage/friends'>
                <i
                  className='fas fa-user fa-2x'
                  style={{ cursor: 'pointer' }}
                />
              </Link>
            </a>
          </li>
          <li className='navChat'>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className='navLink'>
              <Link to='/mainpage/chats'>
                <i
                  className='far fa-comment fa-2x'
                  style={{ cursor: 'pointer' }}
                />
              </Link>
            </a>
          </li>
          <li className='navMore'>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className='navLink'>
              <i
                className='fas fa-ellipsis-h fa-2x'
                style={{ cursor: 'pointer' }}
              />
            </a>
          </li>
        </li>
        <li className='navSpace' />
        <li className='navBottom'>
          <li className='navSound'>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className='navLink sound'>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <i
                className={
                  mutedState
                    ? 'far fa-bell-slash fa-2x bell-slash'
                    : 'far fa-bell fa-2x'
                }
                onClick={() => setMutedState(!mutedState)}
              />
            </a>
          </li>
          <li className='navSetting'>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className='navLink'>
              <i className='fas fa-cog fa-2x' />
            </a>
          </li>
        </li>
      </ul>
    </nav>
  );
}

export default LeftMenu;
