import useWindowDimensions from '../utils/window.util';
import DesktopLayout from './desktop.layout';
// import MobileLayout from './mobile.layout';
// import Footer from 'RegisterPage/Footer/footer';

const ResponsiveLayout = ({ children }) => {
	const { width } = useWindowDimensions();
	return (
		<DesktopLayout>{children}</DesktopLayout>
	);
}
export default ResponsiveLayout;
