import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import FifthPage from './components/FifthPage';
import SixthPage from './components/SixthPage';
import { pageStepStore } from '../../zustand/FriendsStore';

const Register = () => {
  const { regPage } = pageStepStore((state) => state);

  // eslint-disable-next-line consistent-return
  const selectPage = (page) => {
    // eslint-disable-next-line default-case
    switch (page) {
      case 0:
        return <FirstPage />;
      case 1:
        return <SecondPage />;
      case 2:
        return <ThirdPage />;
      case 3:
        return <FourthPage />;
      case 4:
        return <FifthPage />;
      case 5:
        return <SixthPage />;
    }
  };
  return <>{selectPage(regPage)}</>;
};

export default Register;
