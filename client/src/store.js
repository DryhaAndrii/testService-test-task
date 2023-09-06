import { create } from 'zustand';
import { devtools } from 'zustand/middleware'

const useStore = create(devtools((set) => ({
  loading: false,
  userInfo: null,
  message: '',
  setLoading: (boolean) => set({ loading: boolean }),
  setUserInfo: (userInfo) => set({ userInfo: userInfo }),
  setMessage: (message) => set({ message: message }),
})));

export default useStore;