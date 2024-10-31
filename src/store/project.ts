import { IProjectInfoProps } from '@/types/projectType';
import { Nullable } from '../types/type';
import { defineStore } from 'pinia';

interface IProjectState {
  projectList: Nullable<IProjectInfoProps>[] | null;
}

// 创建 store
export const useProjectStore = defineStore({
  id: 'app-project', // 唯一 ID，可以配合 Vue devtools 使用
  state: (): IProjectState => ({
    projectList: [
      {
        name: '测试项目',
        id: 0,
      },
    ],
  }),
  unistorage: false,
  actions: {
    setProjectList(info: Nullable<IProjectInfoProps>[] | null) {
      this.projectList = info ?? null;
    },
  },
});
