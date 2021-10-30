import create from 'zustand';

// eslint-disable-next-line import/prefer-default-export
export const useStore = create((set) => ({
  friendsLists: [],
  setFriendsLists: (props) => set({ friendsLists: props }),
  friendsWhoseBirthdayIsToday: [],
  setFriendsWhoseBirthdayIsToday: (props) =>
    set({ friendsWhoseBirthdayIsToday: props }),
}));

export const pageStepStore = create((set) => ({
  regPage: 0,
  setRegPage: (props) => set({ regPage: props }),
}));
