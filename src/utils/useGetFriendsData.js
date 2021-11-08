import { getData } from './Api';
import { myInfoStore, useStore, loadingStore } from '../zustand/FriendsStore';



export const useGetFriendsData = async (a) => {
	const { setFriendsLists } = useStore((state) => state);
	const { setLoading } = loadingStore((state) => state);

	if (a) {
		const parameter = {
			uid: a.uid
		};
		await getData.get('friend/getFriends', { params: parameter }).then(res=> {
			setFriendsLists(res.data);
			setLoading(false);
			console.log('succ')
		} );
	}
	console.log(1231);
};