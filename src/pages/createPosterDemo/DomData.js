/**
 *
 * @param {*} listData  canvas数据
 */

export const wxml = (listData) => `
<view class="container">
  ${listData
    .map((item) => {
      return (
        `
    <view class="contentWrap">
      <view >
        <image src="` +
        item.imgsrc +
        `"  class="pic1"/>
        <text class="name">` +
        item.title +
        `</text>
        <text class="subtitle">` +
        item.auther +
        `</text>
      </view>
      <view class="bottomcss">
        <image src="` +
        item.imgsrc +
        `"  class="imgbc"/>
        <view class="tapContent1">
          <text class="tapname">` +
        item.text +
        `</text>
        </view>
      </view>
    </view>`
      );
    })
    .join('')}
</view>
`;
/**
 *
 *
 * @param {*} screenWidth 屏幕宽度
 * @param {*} canvasWidth  画布宽度
 * @param {*} canvasHeight  画布高度
 * @param {*} numberWidth  数字宽度，动态设置
 * @return {*}
 */
export const style = (screenWidth, canvasWidth, canvasHeight) => {
  return {
    container: {
      width: canvasWidth,
      minHeight: canvasHeight,
      position: 'relative',
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    bottomcss: {
      marginTop: 0,
    },

    contentWrap: {
      position: 'relative',
      width: canvasWidth * 0.99,
      marginBottom: 20,
      marginTop: 5,
      marginLeft: 1,
      borderRadius: 20,
      overflow: 'hidden',
      backgroundColor: '#333333',
    },
    imgbc: {
      justifyContent: 'center',
      alignItems: 'center',
      width: canvasWidth * 0.97,
      height: canvasWidth,
      marginBottom: 4,
      marginLeft: 4,
      marginTop: 10,
      borderRadius: 20,
      overflow: 'hidden',
    },
    tapContent1: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
    tapname: {
      fontSize: 18,
      color: '#fff',
      marginLeft: 15,
      marginTop: 50,
      overflow: 'hidden',
      width: canvasWidth * 0.92,
      height: 400,
      textAlign: 'left',
    },
    name: {
      fontSize: 20,
      color: '#fff',
      marginLeft: canvasWidth * 0.08,
      width: canvasWidth * 0.84,
      height: 30,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 14,
      color: '#9E9C9C',
      marginLeft: canvasWidth * 0.08,
      width: canvasWidth * 0.84,
      height: 20,
      textAlign: 'center',
    },
    content: {
      fontSize: 14,
      color: '#333',
      width: canvasWidth * 0.84,
      height: screenWidth * 0.15,
      marginLeft: canvasWidth * 0.08,
    },
    pic1: {
      width: canvasWidth * 0.3,
      height: screenWidth * 0.3,
      marginTop: canvasWidth * 0.1,
      marginLeft: canvasWidth * 0.35,
      marginBottom: canvasWidth * 0.05,
      borderRadius: screenWidth * 0.14,
      overflow: 'hidden',
    },
    pic2: {
      width: canvasWidth,
      height: canvasWidth,
      marginTop: 10,
    },
    bottom: {
      width: canvasWidth,
      height: screenWidth * 0.2,
      flexDirection: 'row',
      justifyContent: 'self-start',
      alignItems: 'center',
      backgroundColor: '#fafafa',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
    qr: {
      width: canvasWidth * 0.14,
      height: screenWidth * 0.14,
      marginLeft: canvasWidth * 0.04,
      marginRight: canvasWidth * 0.04,
    },
    msg: {
      fontSize: 14,
      color: '#a1a1a1',
      width: canvasWidth * 0.74,
      height: 14,
      textAlign: 'left',
    },
  };
};
