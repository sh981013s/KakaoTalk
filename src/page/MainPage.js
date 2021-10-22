import Banner from '../component/Banner';
import Friends from '../component/contents/Friends';
import LeftMenu from '../component/LeftMenu';
import Header from '../component/Header';
import { useState } from 'react';
import '../resources/css/mainpage/MainPage.css';
// import {getData} from '../utils/Api';

/**
 * @author Lee seung hwan
 * @date 2021.10.22
 * @description Friends | Chat | More를 관리하는 컴포넌트
 */
function MainPage() {
	const [searchText, setSearchText] = useState('');
	const [userList, setUserList] = useState([]);

	const receive = (props) => {
		setSearchText(props);
	};

	const pullData = (props) => {
		setUserList(props);
	};

	return (
		<div className="mainPage">
			<div>
				<Header receive={receive} userList={userList} />
				<Friends searchText={searchText} func={pullData} />
			</div>
			<LeftMenu />

			<Banner />
		</div>
	);
}

export default MainPage;
