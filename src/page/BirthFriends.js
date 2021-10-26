import { useEffect, useState } from 'react';
import { getData } from '../utils/Api';
import moment from 'moment';
import convertDate from '../utils/convertDate';
import { useStore } from '../zustand/FriendsStore';

/**
 * @author seung hwan lee
 * @date 2021.10.23
 * @description birth friends component
 **/


const BirthFriends = () => {

	const [pastTodayUpcomingBirthday, setPastTodayUpcomingBirthday] = useState([[],[],[]]);
	const  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


	const getBirthFriends = async () => {
		let resultData = await getData.get('member/getFriends');
		resultData = resultData.data;
		const monthlyBirthday = [];
		let today = moment()._d;
		today = parseInt(moment(today,
			'YYYY MM DD').format('MM-DD').split('-').join(''));

		resultData.forEach(person => {
			let eachBirthday = moment(
				person.birth,
				'YYYY MM DD hh:mm:ss'
			).format('MM-DD');
			eachBirthday = parseInt(eachBirthday.split('-').join(''))+1;
			monthlyBirthday.push({name: person.name, birthday: eachBirthday, email: person.email});
		})

		monthlyBirthday.sort((a,b) => {
			return a.birthday - b.birthday;
		})

		monthlyBirthday.map(user => {
			const day = user.birthday.toString().slice(-2);
			const month = months[parseInt(user.birthday.toString().slice(0, 2))-1];
			const date = `${month} ${day}`

			if(user.birthday < today) {
				pastTodayUpcomingBirthday[0].push({name: user.name, birthday: date, email: user.email})
			}
		})

		// pastTodayUpcomingBirthday[0].push();
		console.log(pastTodayUpcomingBirthday);
	};

	// getBirthFriends();

	useEffect(()=> {
		getBirthFriends();
	},[])


	return (
		<div>
			<div className="friendsModal">
				<h2 onClick={()=>console.log(pastTodayUpcomingBirthday)}>Friends with Birthdays</h2>
				<div className="friendsModalRow">
{/*					{
						pastTodayUpcomingBirthday[0].length > 0 ?
							pastTodayUpcomingBirthday[0].map(user => {
								return(
									<div>{user}</div>
								)
							})
						 : null
					}*/}
				</div>
			</div>
		</div>
	);
};
export default BirthFriends;
