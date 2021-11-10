import { Fragment } from 'react'
import FirstPage from '../../components/RegisterPage/FirstPage';
import SecondPage from '../../components/RegisterPage/SecondPage';
import ThirdPage from '../../components/RegisterPage/ThirdPage';
import FourthPage from '../../components/RegisterPage/FourthPage';
import FifthPage from '../../components/RegisterPage/FifthPage';
import SixthPage from '../../components/RegisterPage/SixthPage';
import { pageStepStore } from '../../zustand/FriendsStore';

const RegisterPage = () => {
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
  return <Fragment>{selectPage(regPage)}</Fragment>;
};

export default RegisterPage;
