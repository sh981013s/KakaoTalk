import { useEffect, useState } from 'react';
import { getData } from '../utils/Api';
import moment from 'moment';
import convertDate from '../utils/convertDate';
import { useStore } from '../zustand/FriendsStore';
import basic from '../resources/img/basic_profile.jpg';

/**
 * @author seung hwan lee
 * @date 2021.10.23
 * @description birth friends component
 **/


const BirthFriends = () => {

	const [pastTodayUpcomingBirthday, setPastTodayUpcomingBirthday] = useState([[],[],[]]);
	const  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	let tmp = [[],[],[]];
	let tmpPerson = {birthday:'1234'};

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

			if (user.birthday < today) {
				tmp[0].push({name: user.name, birthday: date, email: user.email})
			} else if (user.birthday === today) {
				tmp[1].push({name: user.name, birthday: date, email: user.email})
			} else {
				tmp[2].push({name: user.name, birthday: date, email: user.email})
			}

		})

		setPastTodayUpcomingBirthday(tmp);


		// pastTodayUpcomingBirthday[0].push();
		console.log(pastTodayUpcomingBirthday);
	};

	// getBirthFriends();

	useEffect(()=> {
		getBirthFriends();
	},[])


	return (
		<div className='entireBirthday'>
			<div className="birthdayModal">
				<h1>Friends with Birthdays</h1>
				<div className="birthdayModalDivision">
					{
						(function(){
							if(pastTodayUpcomingBirthday[0].length > 0) {
								return(<h3>Past Birthdays</h3>)
							}
						})()
					}
					{
						pastTodayUpcomingBirthday[0].length > 0 ?
							pastTodayUpcomingBirthday[0].map(user=>{
								if(user.birthday !== tmpPerson.birthday) {
									tmpPerson = user
									return (
										<div>
											<div><p className='birthdayModalDate'>{user.birthday}</p></div>
											<div className='birthdayDesc'>
												<div className='birthdayPic'>
													<img src={basic} />
												</div>
												<div className='birthdayUsername'>
													{user.name}
												</div>
												<div className='sendGiftContainer'><div className='sendGift'>Send Gift</div></div>
											</div>
										</div>
									)
								} else {
									tmpPerson = user
									return (
										<div>
											<div className='birthdayDesc'>
												<div className='birthdayPic'>
													<img src={basic} />
												</div>
												<div className='birthdayUsername'>{user.name}</div>
												<div className='sendGiftContainer'><div className='sendGift'>Send Gift</div></div>
											</div>
										</div>
									)
								}
							})
						 : null
					}
					{
						(function(){
							if(pastTodayUpcomingBirthday[0].length > 0) {
								return(<><hr/></>)}
						})()
					}
				</div>
				<div className="birthdayModalDivision">
					{
						(function(){
							if(pastTodayUpcomingBirthday[1].length > 0) {
								return(<h3>Today</h3>)
							}
						})()
					}
					{
						pastTodayUpcomingBirthday[1].length > 0 ?
							pastTodayUpcomingBirthday[1].map(user=>{
								if(user.birthday !== tmpPerson.birthday) {
									tmpPerson = user
									return (
										<div>
											<div><p className='birthdayModalDate'>{user.birthday}</p></div>
											<div className='birthdayDesc'>
												<div className='birthdayPic'>
													<img src={basic} />
												</div>
												<div className='birthdayUsername'>{user.name}<i className="fas fa-birthday-cake" /></div>
												<div className='sendGiftContainer'><div className='sendGift'>Send Gift</div></div>
											</div>
										</div>
									)
								} else {
									tmpPerson = user
									return (
										<div>
											<div className='birthdayDesc'>
												<div className='birthdayPic'>
													<img src={basic} />
												</div>
												<div className='birthdayUsername'>{user.name}<i className="fas fa-birthday-cake" /></div>
												<div className='sendGiftContainer'><div className='sendGift'>Send Gift</div></div>
											</div>
										</div>
									)
								}
							})
							: null
					}
					{
						(function(){
							if(pastTodayUpcomingBirthday[0].length > 0) {
								return(<><hr/></>)}
						})()
					}
				</div>
				<div className="birthdayModalDivision">
					{
						(function(){
							if(pastTodayUpcomingBirthday[2].length > 0) {
								return(<h3>Upcoming Birthdays</h3>)
							}
						})()
					}
					{
						pastTodayUpcomingBirthday[2].length > 0 ?
							pastTodayUpcomingBirthday[2].map(user=>{
								if(user.birthday !== tmpPerson.birthday) {
									tmpPerson = user
									return (
										<div>
											<div><p className='birthdayModalDate'>{user.birthday}</p></div>
											<div className='birthdayDesc'>
												<div className='birthdayPic'>
													<img src={basic} />
												</div>
												<div className='birthdayUsername'>{user.name}</div>
												<div className='sendGiftContainer'><div className='sendGift'>Send Gift</div></div>
											</div>
										</div>
									)
								} else {
									tmpPerson = user
									return (
										<div>
											<div className='birthdayDesc'>
												<div className='birthdayPic'>
													<img src={basic} />
												</div>
												<div className='birthdayUsername'>{user.name}</div>
												<div className='sendGiftContainer'><div className='sendGift'>Send Gift</div></div>
											</div>
										</div>
									)
								}
							})
							: null
					}
				</div>

			</div>
		</div>
	);
};
export default BirthFriends;
