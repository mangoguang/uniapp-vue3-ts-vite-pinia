<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <button @click="toSetting">我的</button>
      <button @click="open">打开弹窗</button>
      <button @click="getUserInfo">getUserInfo</button>
      <button @click="login">登录</button>
      <uni-popup ref="mypopup" type="bottom" border-radius="10px 10px 0 0">底部弹出 Popup 自定义圆角</uni-popup>
    </view>
    <view>
      <uni-badge size="small" :text="100" absolute="rightBottom" type="primary">
        <button>右下</button>
      </uni-badge>
      <uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useUserStore } from '@/store/user';
  import { wxLogin } from '@/api/user';

  const title = ref('Hello');
  const mypopup = ref(null);
  const userStore = useUserStore();

  onMounted(() => {
    console.log('index onMounted', userStore.userInfo ? '2' : 3);
  });

  const toSetting = () => {
    uni.navigateTo({
      url: '/pages/my/my',
    });
  };

  const open = () => {
    console.log('popup', mypopup);
    // mypopup.open('top')
  };

  const getUserInfo = () => {
    console.log('getUserInfo1', userStore.userInfo?.name);
  };

  const login = () => {
    const data = {
      phone: 'cdn_baoli01',
      password: 'bl.123.cdn',
      company_id: 6,
    };
    console.log('login data:', data);
    wxLogin(data).then((res) => {
      console.log('login res', res);
    });
  };
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
