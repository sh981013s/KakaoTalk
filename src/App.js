import './resources/css/base/styles.css';
import MainPage from './page/MainPage';
import 'antd/dist/antd.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './page/Login';

/**
 * @author Lee seung hwan
 * @description ~~~~
 */
function App() {
	return (
		<>
			<BrowserRouter basename='/kakao'>>
				<Switch>
					<Route path={'/mainpage'} component={MainPage} />
					<Route path={'/login'} component={Login} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
