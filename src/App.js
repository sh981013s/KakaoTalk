import './resources/css/base/styles.css';
import MainPage from './page/MainPage';
import 'antd/dist/antd.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './page/account/Login';
import BirthFriends from './page/BirthFriends';

/**
 * @author Lee seung hwan
 * @description
 */
function App() {
	return (
		<>
			<BrowserRouter basename="/kakao">
				<Switch>
					<Route path={'/birthFriends'} component={BirthFriends} />
					<Route path={'/mainpage'} component={MainPage} />
					<Route path={'/login'} component={Login} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
