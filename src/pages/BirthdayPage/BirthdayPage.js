import { useEffect, useState } from 'react';
import moment from 'moment';
import { getData } from '../../utils/Api';
import basic from '../../resources/img/basic_profile.jpg';
import { useStore } from '../../zustand/FriendsStore';
import { checkIsUserLoggedIn } from '../../components/common/CheckIsUserLoggedIn';


/**
 * @author seung hwan lee
 * @date 2021.10.23
 * @description birth friends components
 * */

const BirthdayPage = () => {
  const { setFriendsLists } = useStore((state) => state);
  const [resultData, setResultData] = useState([]);

  const GetMyAndFriendsData = async ( ) => {
    const tokenValue = localStorage.getItem('token');
    const parameter = {
      token: tokenValue,
    };
    await getData.get('member/me', { params: parameter })
      .then((res)=>{
        const param = {
          uid: res.data.userInfo[0].uid
        }
        getData.get('friend/getFriends', { params: param }).then(friends=> {
          setResultData(friends.data);
        } );
      })
  };

  const [pastTodayUpcomingBirthday, setPastTodayUpcomingBirthday] = useState([
    [],
    [],
    [],
  ]);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const tmp = [[], [], []];
  let tmpPerson = { birthday: '1234' };

  const getBirthFriends = async () => {

      const monthlyBirthday = [];
    // eslint-disable-next-line no-underscore-dangle
    let today = moment()._d;
    today = parseInt(
      moment(today, 'YYYY MM DD').format('MM-DD').split('-').join(''),
      10
    );
    console.log(today,'today')

    resultData.forEach((person) => {
      let eachBirthday = moment(person.birth, 'YYYY MM DD hh:mm:ss').format(
        'MM-DD'
      );
      eachBirthday = parseInt(eachBirthday.split('-').join(''), 10) + 1;
      monthlyBirthday.push({
        name: person.name,
        birthday: eachBirthday,
        email: person.email,
      });
    });

    monthlyBirthday.sort((a, b) => a.birthday - b.birthday);

    // eslint-disable-next-line array-callback-return
    monthlyBirthday.map((user) => {
      console.log(user)
      const day = user.birthday.toString().slice(-2);
      const month =
        months[parseInt(user.birthday.toString().slice(0, 2), 10) - 1];
      const date = `${month} ${day}`;

      if (user.birthday < today) {
        tmp[0].push({ name: user.name, birthday: date, email: user.email });
      } else if (user.birthday === today) {
        tmp[1].push({ name: user.name, birthday: date, email: user.email });
      } else {
        tmp[2].push({ name: user.name, birthday: date, email: user.email });
      }
    });

    setPastTodayUpcomingBirthday(tmp);
    // setFriendsLists(pastTodayUpcomingBirthday);
  };


  useEffect(() => {
/*    const start = async () => {
      await checkIsUserLoggedIn();
      await GetMyAndFriendsData();
      await getBirthFriends();
      setFriendsLists(pastTodayUpcomingBirthday);
    }*/
    checkIsUserLoggedIn();
    GetMyAndFriendsData();
  }, []);

  useEffect(()=>{
    getBirthFriends();
  },[resultData])

  useEffect(()=>{
    console.log(pastTodayUpcomingBirthday,'pastfinal')
  },[pastTodayUpcomingBirthday])

  useEffect(()=>{
    console.log(pastTodayUpcomingBirthday)
  },[pastTodayUpcomingBirthday])


  return (
    <div className='entireBirthday'>
      <div className='birthdayModal'>
        <h1>Friends with Birthdays</h1>
        <div className='birthdayModalDivision'>
          {
            pastTodayUpcomingBirthday[0].length > 0
            ? <h3>Past Birthdays</h3>
              : null
          }
          {pastTodayUpcomingBirthday[0].length > 0
            ?
            pastTodayUpcomingBirthday[0].map((user) => {
              if (user.birthday !== tmpPerson.birthday) {
                tmpPerson = user;
                return (
                  <div>
                    <div>
                      <p className='birthdayModalDate'>{user.birthday}</p>
                    </div>
                    <div className='birthdayDesc'>
                      <div className='birthdayPic'>
                        <img src={basic} alt='' />
                      </div>
                      <div className='birthdayUsername'>{user.name}</div>
                      <div className='sendGiftContainer'>
                        <div className='sendGift'>Send Gift</div>
                      </div>
                    </div>
                  </div>
                );
              }
              tmpPerson = user;
              return (
                // eslint-disable-next-line react/jsx-key
                <div>
                  <div className='birthdayDesc'>
                    <div className='birthdayPic'>
                      <img src={basic} alt='' />
                    </div>
                    <div className='birthdayUsername'>{user.name}</div>
                    <div className='sendGiftContainer'>
                      <div className='sendGift'>Send Gift</div>
                    </div>
                  </div>
                </div>
              );
            })
            : null}
          {/* eslint-disable-next-line consistent-return,func-names */}
          {(function () {
            if (pastTodayUpcomingBirthday[0].length > 0) {
              return (
                <>
                  <hr />
                </>
              );
            }
          })()}
        </div>
        <div className='birthdayModalDivision'>
          {/* eslint-disable-next-line consistent-return,func-names */}
          {(function () {
            if (pastTodayUpcomingBirthday[1].length > 0) {
              return <h3>Today</h3>;
            }
          })()}
          {pastTodayUpcomingBirthday[1].length > 0
            ? pastTodayUpcomingBirthday[1].map((user) => {
              if (user.birthday !== tmpPerson.birthday) {
                tmpPerson = user;
                return (
                  <div>
                    <div>
                      <p className='birthdayModalDate'>{user.birthday}</p>
                    </div>
                    <div className='birthdayDesc'>
                      <div className='birthdayPic'>
                        <img src={basic} alt='' />
                      </div>
                      <div className='birthdayUsername'>
                        {user.name}
                        <i className='fas fa-birthday-cake' />
                      </div>
                      <div className='sendGiftContainer'>
                        <div className='sendGift'>Send Gift</div>
                      </div>
                    </div>
                  </div>
                );
              }
              tmpPerson = user;
              return (
                // eslint-disable-next-line react/jsx-key
                <div>
                  <div className='birthdayDesc'>
                    <div className='birthdayPic'>
                      <img src={basic} alt='' />
                    </div>
                    <div className='birthdayUsername'>
                      {user.name}
                      <i className='fas fa-birthday-cake' />
                    </div>
                    <div className='sendGiftContainer'>
                      <div className='sendGift'>Send Gift</div>
                    </div>
                  </div>
                </div>
              );
            })
            : null}
          {
            pastTodayUpcomingBirthday[1].length > 0
            ? <hr />
              : null
            }
        </div>
        <div className='birthdayModalDivision'>
          {
            pastTodayUpcomingBirthday[2].length > 0
              ? <h3>Upcoming Birthdays</h3>
              : null
          }
          {pastTodayUpcomingBirthday[2].length > 0
            ? pastTodayUpcomingBirthday[2].map((user) => {
              if (user.birthday !== tmpPerson.birthday) {
                tmpPerson = user;
                return (
                  <div>
                    <div>
                      <p className='birthdayModalDate'>{user.birthday}</p>
                    </div>
                    <div className='birthdayDesc'>
                      <div className='birthdayPic'>
                        <img src={basic} alt='birthday' />
                      </div>
                      <div className='birthdayUsername'>{user.name}</div>
                      <div className='sendGiftContainer'>
                        <div className='sendGift'>Send Gift</div>
                      </div>
                    </div>
                  </div>
                );
              }
              tmpPerson = user;
              return (
                // eslint-disable-next-line react/jsx-key
                <div>
                  <div className='birthdayDesc'>
                    <div className='birthdayPic'>
                      {/* eslint-disable-next-line jsx-a11y/alt-text */}
                      <img src={basic} />
                    </div>
                    <div className='birthdayUsername'>{user.name}</div>
                    <div className='sendGiftContainer'>
                      <div className='sendGift'>Send Gift</div>
                    </div>
                  </div>
                </div>
              );
            })
            : null}
        </div>
      </div>
    </div>
  );
};
export default BirthdayPage;
