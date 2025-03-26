<script setup></script>

<template>
  <uni-section :title="'日期时间用法：' + datetimesingle" type="line"></uni-section>
  <view class="example-body">
    <uni-datetime-picker type="datetime" v-model="datetimesingle" @change="changeLog" />
  </view>
</template>
