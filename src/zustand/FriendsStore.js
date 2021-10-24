import create from 'zustand';

export const useStore = create((set) => ({
	friendsLists: '1',
	setFriendsLists: (props) => set((state) => set({ friendsLists: props })),
}));
