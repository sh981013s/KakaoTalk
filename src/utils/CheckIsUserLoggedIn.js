const CheckIsUserLoggedIn = async () => {
	const tokenValue = await localStorage.getItem('token');
	if(tokenValue) {
		window.location.replace('/mainpage/friends')
	}
};

export default CheckIsUserLoggedIn;