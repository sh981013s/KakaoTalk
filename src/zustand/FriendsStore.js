import create from 'zustand';

// eslint-disable-next-line import/prefer-default-export
export const useStore = create((set) => ({
  friendsLists: [],
  setFriendsLists: (props) => set({ friendsLists: props }),
  // setFriendsLists: (props) => set({ friendsLists: props }),
  friendsWhoseBirthdayIsToday: [],
  setFriendsWhoseBirthdayIsToday: (props) =>
    set({ friendsWhoseBirthdayIsToday: props }),
}));

export const pageStepStore = create((set) => ({
  regPage: 0,
  setRegPage: (props) => set({ regPage: props }),
}));

export const userRegiInfoStore = create((set) => ({
  userInfo: {
    email: '',
    pw: '',
    name: '',
    tel: '',
    birth: '',
    sex: '',
  },
  setUserInfo: (props) => set({ userInfo: props }),
}));

export const myInfoStore = create((set) => ({
  myInfo: {} ,
  setMyInfo: (props) => set({ myInfo: props }),
}));

export const myChatStore = create((set) => ({
  myChat: [] ,
  setMyChat: (props) => set({ myChat: props }),
}));

export const friendsRefreshStore = create((set) => ({
  refresh: false ,
  setRefresh: (props) => set({ refresh: props }),
}));

