<template>
  <view>
    <text class="title">我的页面1x</text>
    <button @click="getSettings">getSettings</button>
    <button @click="getUserInfo">getUserInfo1</button>
    <button @click="getProjectList">getProjectList</button>
  </view>
</template>

<script setup lang="ts">
import moment from 'moment'
import { cloneDeep } from 'lodash-es'
import { FIELD_TYPE } from '@/types/enum';
import { useUserStore } from '@/store/user'
import { useProjectStore } from '@/store/project'
import { onMounted } from 'vue';

const HOST = import.meta.env.VITE_APP_API_URL
const userStore = useUserStore()
const projectStore = useProjectStore()

console.log('HOST', HOST)

onMounted(() => {
  userStore.setUserInfo({
    name: 'mongoguang',
    avatar: './avatar.png',
    mobile: 1888888888,
    auths: []
  })
  projectStore.setProjectList([{
    id: 1,
    name: '项目1',
  }])
})

const getSettings = () => {
  const clone = cloneDeep(import.meta.env)
  console.log('getSettings1', import.meta.env, moment().format('YYYY-MM-DD'), clone, FIELD_TYPE.INPUT)
  uni.request({
    url: `${HOST}/project/get?id=187&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcGVuaWQiOm51bGwsImlkIjoxNDY3LCJyb2xlIjoyLCJpYXQiOjE3Mjg5ODA0MDUsImV4cCI6MTczMTU3MjQwNX0.4w8UEMC1DPb1Rpgl4XHLQfHvkxTmoRx7oIRxc3t66-U&company_id=6`, //仅为示例，并非真实接口地址。
    data: {
      text: 'uni.request'
    },
    header: {
      'custom-header': 'hello1' //自定义请求头信息
    },
    success: (res) => {
      console.log('getSettings success:', res.data);
    }
  });
}

const getUserInfo = () => {
  console.log('getUserInfo1', userStore.userInfo?.name)
}

const getProjectList = () => {
  let arr = projectStore.projectList || []
  console.log('getProjectList1', arr[0])
}
</script>

<style scoped lang="scss"></style>
