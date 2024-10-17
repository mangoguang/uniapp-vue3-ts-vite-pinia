<template>
  <view>
    <text>设置页面</text>
    <button @click="getSettings">getSettings</button>
  </view>
</template>

<script setup lang="ts">
const getSettings = () => {
  console.log('getSettings1', process.env)
  // uni.request({
  // 	url: 'https://localhost:8080/api/project/get?id=187&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcGVuaWQiOm51bGwsImlkIjoxNDY3LCJyb2xlIjoyLCJpYXQiOjE3Mjg1NDkwMTQsImV4cCI6MTczMTE0MTAxNH0.sdmVWS-T6_iANZclqjNdNemX6QyADZAuiFakaL2JNPs&company_id=6', //仅为示例，并非真实接口地址。
  // 	data: {
  // 		text: 'uni.request'
  // 	},
  // 	header: {
  // 		'custom-header': 'hello' //自定义请求头信息
  // 	},
  // 	success: (res) => {
  // 		console.log('getSettings success:', res.data);
  // 	}
  // });
}
getSettings();
</script>

<style></style>
