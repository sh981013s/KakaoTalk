import './resources/css/base/styles.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  InitialPage,
  MainPage,
  RegisterPage,
  ChatWithMePage,
  BirthdayPage
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
        <Route exact path='/chat/:param' component={ChatWithMePage} />
      </ResponsiveLayout>
    </BrowserRouter>
  );
}

export default App;
