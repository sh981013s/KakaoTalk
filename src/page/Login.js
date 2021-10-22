import { Button, Input } from 'antd';
import { useState } from 'react';
import { getData } from '../utils/Api';

const Login = () => {

	const [email, setEmail] = useState('');
	const [pw, setPw] = useState('');

	const sendLogin = async () => {
		let parameter = {
			email : email,
			password : pw
		}
		const resultData = await getData.get('member/login', parameter);

		console.log(resultData,':::::')
	};

	return (
		<div>
		<Input value={email} onChange={(e) => setEmail(e.target.value)} />
		<Input type='password' value={pw} onChange={(e) => setPw(e.target.value)} />
			<Button type={'primary'} onClick={sendLogin}>Submit</Button>
	</div>
	);
};


export default Login