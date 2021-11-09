import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { getData } from '../../utils/Api';
import { myInfoStore, useStore, friendsRefreshStore } from '../../zustand/FriendsStore';
import { MyProfileList, FriendList } from './Profiles'
import BirthdayList from './BirthdayList'

function Friends(props) {
	const {friendsLists, setFriendsLists } = useStore((state) => state);
	const { refresh, setRefresh } = friendsRefreshStore((state) => state);
	const { myInfo, setMyInfo } = myInfoStore((state) => state);
	const [friendList, setFriendsList] = useState([]);
	const [showProfile, setShowProfile] = useState(true);
	const [loading, setLoading] = useState(true);

	const getFriendsData = async () => {
		if (myInfo) {
			const parameter = {
				uid: myInfo.uid
			};
			await getData.get('friend/getFriends', { params: parameter }).then(res=> {
				setFriendsLists(res.data);
				setFriendsList(res.data);
				setLoading(false)
			} );
		}
	};

/*	useEffect(() => {
		getFriendsData();
	}, [myInfo]);*/


	const getMyInfo = async () => {
		const tokenValue = localStorage.getItem('token');
		const parameter = {
			token: tokenValue,
		};
		const myInfoFromServer = await getData.get('member/me', { params: parameter });
		setMyInfo(myInfoFromServer.data.userInfo[0]);
		console.log(myInfo)
	};

	useEffect(() => {
		if(refresh) {
			setLoading(true)
			getFriendsData()
				.then(() => setLoading(false))
				.then(() => setRefresh(false));
		}
	}, [refresh]);

	useEffect(() => {
		async function setBase() {
			await getMyInfo();
			getFriendsData();
		}
		setBase();
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
