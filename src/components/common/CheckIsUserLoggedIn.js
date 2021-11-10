
export const InitialCheckIsUserLoggedIn = async () => {
	const tokenValue = await localStorage.getItem('token');
	if(tokenValue) {
		window.location.replace('/mainpage/friends')
	}
};

export const checkIsUserLoggedIn = async () => {
	const tokenValue = await localStorage.getItem('token');
	if(!tokenValue) {
		alert('Try to log-in to use KakaoTalk')
		window.location.replace('/')
	}
};

