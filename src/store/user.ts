import { IUserInfoProps } from '@/types/userType';
import { Nullable } from '../types/type';
import { defineStore } from 'pinia';

interface IState {
  userInfo: Nullable<IUserInfoProps> | null;
}

// 创建 store
export const useUserStore = defineStore({
  id: 'app-user', // 唯一 ID，可以配合 Vue devtools 使用
  state: (): IState => ({
    // userInfo
    userInfo: {
      name: 'guang',
      avatar: '',
      mobile: 0,
      auths: [],
    },
  }),
  unistorage: {
    paths: ['userInfo'],
  },
  getters: {
    getUserInfo(): Nullable<IUserInfoProps> | null {
      return this.userInfo || null;
    },
  },
  actions: {
    setUserInfo(info: Nullable<IUserInfoProps> | null) {
      this.userInfo = info ?? null;
    },
    resetState() {
      this.userInfo = null;
    },

    /**
     * @description: fetchUserInfo
     */
    // async fetchUserInfo(params: ReqParams) {
    //   const res = await fetchApi.userInfo(params);
    //   if (res) {
    //     this.setUserInfo(res);
    //   }
    // },
  },
});
