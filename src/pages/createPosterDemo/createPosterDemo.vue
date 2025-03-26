<!-- 测试页面，可复制使用 -->
<template>
  <view class="wrap">
    <!-- 保存canvas测试 -->
    <view class="share-page">
      <view
        class="share-page-box"
        id="box"
        v-if="show"
        :style="{ width: canvasWidth + 'px', height: canvasHeight + 'px' }"
      >
        <wxml-to-canvas class="widget" ref="widget" :width="canvasWidth" :height="canvasHeight"></wxml-to-canvas>
      </view>
      <view class="share-page-box msg-box" v-else :style="{ width: canvasWidth + 'px', height: canvasHeight + 'px' }">
        {{ msg }}
      </view>
      <view class="share-page-btn" @tap="extraImage">
        <button class="btn-big" :style="getBtnStyle">保存图片</button>
      </view>
    </view>
  </view>
</template>

<script>
  import { wxml, style } from './DomData.js';
  export default {
    data() {
      return {
        show: false, // 是否显示canvas
        canvasWidth: 320, // 默认canvas宽高
        canvasHeight: 480,
        screenWidth: null, // 设备宽度
        screenHeight: null, // 设备高度
        // name: '',
        // pic: '',
        // chapter1: '',
        // chapter2: '',
        widget: null,
        msg: '加载中，请稍等...', // 提示语
        listData: [
          {
            type: '1',
            title: '标题一',
            auther: '张三  2024-01-10',
            imgsrc: 'https://pic1.zhimg.com/80/v2-58fe538a59f870407b1435bfd45893ed_720w.jpeg',
            text: '本报讯（记者 杜晨薇）上海正在建设东方枢纽项目，浦东国际机场与沪通铁路将实现连通，枢纽周边临空产业、重点项目布局正在规划设计中。为落实上海市政府与中国东方航空集团有限公司（以下简称“中国东航”）合作协议要求，充分利用东方枢纽建设发展机遇期进一步深化合作发展，昨天下午，浦东新区政府与中国东航签署深化合作战略协议。',
          },
          {
            type: '2',
            title: '标题二',
            auther: '张三  2024-01-10',
            imgsrc: 'https://pic1.zhimg.com/80/v2-58fe538a59f870407b1435bfd45893ed_720w.jpeg',
            text: '本报讯（记者 杜晨薇）上海正在建设东方枢纽项目，浦东国际机场与沪通铁路将实现连通，枢纽周边临空产业、重点项目布局正在规划设计中。为落实上海市政府与中国东方航空集团有限公司（以下简称“中国东航”）合作协议要求，充分利用东方枢纽建设发展机遇期进一步深化合作发展，昨天下午，浦东新区政府与中国东航签署深化合作战略协议。',
          },
          {
            type: '3',
            title: '标题三',
            auther: '张三  2024-01-10',
            imgsrc: 'https://pic1.zhimg.com/80/v2-58fe538a59f870407b1435bfd45893ed_720w.jpeg',
            text: '本报讯（记者 杜晨薇）上海正在建设东方枢纽项目，浦东国际机场与沪通铁路将实现连通，枢纽周边临空产业、重点项目布局正在规划设计中。为落实上海市政府与中国东方航空集团有限公司（以下简称“中国东航”）合作协议要求，充分利用东方枢纽建设发展机遇期进一步深化合作发展，昨天下午，浦东新区政府与中国东航签署深化合作战略协议。',
          },
          {
            type: '4',
            title: '标题四',
            auther: '张三  2024-01-10',
            imgsrc: 'https://pic1.zhimg.com/80/v2-58fe538a59f870407b1435bfd45893ed_720w.jpeg',
            text: '本报讯（记者 杜晨薇）上海正在建设东方枢纽项目，浦东国际机场与沪通铁路将实现连通，枢纽周边临空产业、重点项目布局正在规划设计中。为落实上海市政府与中国东方航空集团有限公司（以下简称“中国东航”）合作协议要求，充分利用东方枢纽建设发展机遇期进一步深化合作发展，昨天下午，浦东新区政府与中国东航签署深化合作战略协议。',
          },
          {
            type: '5',
            title: '标题五',
            auther: '张三  2024-01-10',
            imgsrc: 'https://pic1.zhimg.com/80/v2-58fe538a59f870407b1435bfd45893ed_720w.jpeg',
            text: '本报讯（记者 杜晨薇）上海正在建设东方枢纽项目，浦东国际机场与沪通铁路将实现连通，枢纽周边临空产业、重点项目布局正在规划设计中。为落实上海市政府与中国东方航空集团有限公司（以下简称“中国东航”）合作协议要求，充分利用东方枢纽建设发展机遇期进一步深化合作发展，昨天下午，浦东新区政府与中国东航签署深化合作战略协议。',
          },
        ],
      };
    },

    methods: {
      // wxml 转 canvas
      renderToCanvas() {
        console.log('canvasStyle.widget', this.widget);
        const _wxml = wxml(this.listData);
        // console.log('this.widget', _wxml);
        const _style = style(this.screenWidth, this.canvasWidth, this.canvasHeight); //this.canvasHeight
        console.log('this.widget--------------------------------', this.widget?.renderToCanvas);
        const p1 = this.widget.renderToCanvas({ wxml: _wxml, style: _style });
        console.log('renderToCanvas', p1);
        p1.then((res) => {
          console.log('海报生成成功', res);
          wx.hideLoading();
        }).catch((err) => {
          console.log('生成失败', err);
        });
      },
      // 保存到朋友圈
      extraImage() {
        if (!this.show) {
          wx.showToast({ title: '海报生成失败，无法分享到朋友圈', icon: 'none' });
          return;
        }
        wx.showLoading({ title: '海报生成中...' });
        const p2 = this.widget.canvasToTempFilePath({ fileType: 'jpg', quality: 0.5 });
        let that = this;
        p2.then((result) => {
          let path = result.tempFilePath;
          wx.getSetting({
            success: (res) => {
              wx.hideLoading();
              // 非初始化且未授权的情况，需要再次弹窗提示授权
              if (
                res.authSetting['scope.writePhotosAlbum'] != undefined &&
                res.authSetting['scope.writePhotosAlbum'] != true
              ) {
                wx.showModal({
                  title: '是否授权相册权限',
                  content: '需要获取相册权限，请确认授权，否则无法使用相关功能',
                  success: (res) => {
                    if (res.confirm) {
                      wx.openSetting({
                        success: (dataAu) => {
                          if (dataAu.authSetting['scope.writePhotosAlbum'] == true) {
                            wx.showToast({
                              title: '授权成功',
                              icon: 'none',
                              duration: 1000,
                            });
                            that.saveIMg(path);
                          } else {
                            wx.showToast({
                              title: '授权失败',
                              icon: 'success',
                              duration: 1000,
                            });
                          }
                        },
                      });
                    }
                  },
                });
              } else {
                // 初始化且未授权，系统默认会弹窗提示授权
                // 非初始化且已授权，也会进入这里
                that.saveIMg(path);
              }
            },
          });
        });
      },
      // 保存到相册
      async saveIMg(tempFilePath) {
        wx.saveImageToPhotosAlbum({
          filePath: tempFilePath,
          success: async (res) => {
            wx.showModal({
              content: '图片已保存，分享给好友吧！',
              showCancel: false,
              confirmText: '好的',
              confirmColor: '#333',
              success: function (res) {
                wx.navigateBack({
                  //返回
                  delta: 1,
                });
              },
              fail: function (res) {
                console.log('res', res);
              },
            });
          },

          fail: function (res) {
            wx.showToast({
              title: '您取消了授权',
              icon: 'none',
              duration: 2000,
            });
          },
        });
      },
    },
    onLoad(options) {
      console.log('options', options, this.renderToCanvas);
      // 获取设备信息
      wx.getSystemInfo({
        success: (res) => {
          console.log('屏幕', res);
          this.screenWidth = res.screenWidth;
          this.canvasWidth = this.screenWidth;
          this.canvasHeight = this.screenWidth * 8.5;
          console.log('海报高度：', this.canvasHeight);

          this.show = true;
          // 数字容器宽度 动态设置
          setTimeout(() => {
            wx.showLoading({ title: '海报加载中...' });
            console.log('this.selectComponent+++++++++++++++++++++++++', this.$refs.widget);
            this.widget = this.$refs.widget;
            // this.widget = this.selectComponent('.widget');
            this.renderToCanvas();
          }, 1000);
        },
      });
    },
  };
</script>

<style lang="scss">
  .share-page {
    background: #cc0202;
    position: relative;
    overflow: hidden;
    // padding: 10rpx;
    //   min-height: 100vh;
    .msg-box {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
    }
    .share-page-box {
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      box-shadow: 0rpx 6rpx 20rpx 6rpx rgba(0, 0, 0, 0.2);
    }
    .share-page-btn {
      margin: 0 10rpx 0 10rpx;
      .btn-big {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
