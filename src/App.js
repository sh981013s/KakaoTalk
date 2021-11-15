import './resources/css/base/styles.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  InitialPage,
  MainPage,
  RegisterPage,
  ChatWithMePage,
  BirthdayPage,
  ChatwithFriend
} from './pages/index'
import ResponsiveLayout from './layouts/responsive.layout';



/**
 * @author Lee seung hwan
 * @description controls overall pages
 */

function App() {
  return (
    <BrowserRouter>
      <ResponsiveLayout>
        <Route exact path='/' component={InitialPage} />
        <Route exact path='/register' component={RegisterPage} />
        <Route exact path='/mainpage/:param' component={MainPage} />
        <Route exact path='/birthFriends' component={BirthdayPage} />
        <Route exact path='/chatwithme/:param' component={ChatWithMePage} />
        <Route exact path='/chat/:param' component={ChatwithFriend} />
        <Route exact path='/socket' component={ChatwithFriend} />
      </ResponsiveLayout>
    </BrowserRouter>
  );
}

export default App;
