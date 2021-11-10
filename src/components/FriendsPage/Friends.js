import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { getData } from '../../utils/Api';
import { myInfoStore, useStore, friendsRefreshStore } from '../../zustand/FriendsStore';
import { MyProfileList, FriendList } from './Profiles'
import BirthdayList from './BirthdayList'

function Friends(props) {
	const {friendsLists, setFriendsLists } = useStore((state) => state);
	const { refresh, setRefresh } = friendsRefreshStore((state) => state);
	const { setMyInfo } = myInfoStore((state) => state);
	const [friendList, setFriendsList] = useState([]);
	const [showProfile, setShowProfile] = useState(true);
	const [loading, setLoading] = useState(true);

	const GetMyAndFriendsData = async ( ) => {
		const tokenValue = localStorage.getItem('token');
		const parameter = {
			token: tokenValue,
		};
		await getData.get('member/me', { params: parameter })
			.then((res)=>{
				setMyInfo(res.data.userInfo[0])
				const param = {
					uid: res.data.userInfo[0].uid
				}
				getData.get('friend/getFriends', { params: param }).then(resu=> {
					setFriendsLists(resu.data);
					setFriendsList(resu.data);
					setLoading(false);
				} );
			})
	};

	useEffect(() => {
		if(refresh) {
			setLoading(true)
			GetMyAndFriendsData()
				.then(() => setLoading(false))
				.then(() => setRefresh(false));
		}
	}, [refresh]);

	useEffect(() => {
		GetMyAndFriendsData()
	}, []);



	useEffect(() => {
		// eslint-disable-next-line array-callback-return,react/prop-types
		const resultData = friendsLists.filter((value) => value.name.includes(props.searchText));
		setFriendsList(resultData);
		// eslint-disable-next-line react/prop-types
		if (props.searchText !== '') {
			setShowProfile(false);
		} else {
			setShowProfile(true);
		}

		// eslint-disable-next-line react/destructuring-assignment,react/prop-types
	}, [props.searchText]);

	return (
		<Spin spinning={loading} tip='Loading...'>
			<main className='friendsList'>
				{showProfile ? (
					<>
						<MyProfileList />
						<BirthdayList />
					</>
				) : null}
				{friendList.map((friend, idx) => (
					idx === 0 ?
						<>
							<p>Friends {friendsLists.length}</p>
							<FriendList friend={friend} key={idx}/>
						</>
						: <FriendList friend={friend} key={idx}/>
				))}
			</main>
		</Spin>
	);
}

export default Friends;
