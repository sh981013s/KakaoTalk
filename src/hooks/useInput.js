import { useCallback, useState } from 'react';

const useInput = (initialValue = null) => {
	const [data, setData] = useState(initialValue);
	const handler = useCallback((e) => {
		setData(e.target.value);
	},[]);
	return [data, handler, setData]
};

export default useInput;

