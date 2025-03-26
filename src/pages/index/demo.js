const wxml = `
<view class="container" >
  <view class="item-box red">
  </view>
  <view class="item-box green" >
    <text class="text">yeah!</text>
  </view>
  <view class="item-box blue">
      <image class="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA0dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEFDNzlGMDMzNDZDMTFFRkE0MjU5MjI5RTFDMEZCMTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEFDNzlGMDIzNDZDMTFFRkE0MjU5MjI5RTFDMEZCMTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5NmVkZDJlOS1hYmI1LTVkNDMtYWIzNS1hYjQ0NzFiMDViMTciIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5NmVkZDJlOS1hYmI1LTVkNDMtYWIzNS1hYjQ0NzFiMDViMTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5wKXNzAAAFHElEQVR42tRc629UVRA/WxClxVh5xQdIQ9DyRiJC/ACJQuCDUYwoEHmIgRKeIq+EEPgDSIxNMIgpAg0FDQRiNAIfVAj4gdSAQgNCFQjh/aYUpNAq5TfZabLZ9O7ee8/MOZdf8kvau7ezZ38755yZOXObam5uNg7xHPgWOATsA/YCu4DPgI3gXfA6eAY8Dh4EfwUvuRpgyoEgXcFJ4FRwEL1nDBs14DZwI3hRdbQkiBJLwArwQbMcGsEqsFRr3BpGi8BVPHgtNIHlYAfp8UtPmeFgFdjD0ZQ/z1Nxr5TBAqm1CFwK7nEoBqEb+DO4IubapLKotgHXgZ8Yv9gAzgT/9ykIifEtON4kAzvACTai2E6ZLxMkBmEcWOlrDZkHzjbJw2RwkespMxg8AD5pkolG3vF+dyEIifAH2NckGyfBAeB97Smz5DEQw3CetEzbQygvOQV28PABH8b4Au+BPcErWh6y2JMYJubuUQgu0PKQIg6Viz2IsR38KaYodeBL4B1pDxnrSYyr4BwO0+OAxvyexpSZ4mmqzAKvWQjSEpuICkLrxkgPYmwBv89I5OLiTa7KiQlCQc4TjsWgytinWZltXNDYR0gKMsyDd5SBN4UEIQyVFKS3h1R+V8bvT4GdLW0OkBSk1KEYZ8GFWde6C9jtKSnIC47EoKBoOlifdb2bgO1OkoK4ij++Bn9p5bqEIE9LRqouTrMoR3rVpA+rsvEyv5aJlWHXhczPKyXIHeUc5iHHCvtD3v82h/JRUB8mFgk7ZeqUvWN1BDE6ghUx3kM0l7muKEYtuDyieHEW+ZuSgtQq7ioLOc54lpnLrd836XPiODgW5qa2IY39pSRIKisAIxw26ZptNqhLYK3Fe52Q9JBDDgOz8wHXvzLpil1cVEsK8hvY5FGQieAHFjYfgPskBalnUVzgQtbv1GSzxtIm7WANkoIQKj0JUsFbrQ22hr0xiiDbHcQjhHMZP08D37G0V68lCLncOodrCOUv5QL2vglIB6xC9xZQTeJ02ETJIgn7F9wNjrG0RXbowOqyhoe0RKxfKIpRx99mmYAYhM+jiBHHQwxHlTWcgUrjKPgueETAC/8BBxoHZ7v0Bh8by06dHDvMegExmniM96P+Ydz+EGqFWKYgyBtcBrDFYh5j9FzCsqWqkr+JJIF2wpmxkyuBHrPNHFonAdTvNtVmOkt1IX4HfuhZDGr9/sh47kLMLCPs4B3CB3406Ya7/6zrEYKdzIW8kA10LEYNL8b3JIxJt3b359pJO0diUHPdaxy/iKBAeIBHhfKPsCiXFEPDQwyn6mdyBFeNnGOEQVEOb6MqeokJWTyOshhKgwa4CZwbEIn2A2+HtEUFZyoOv9jKa1ukxdCYMpmD1cZmDaNaj5i14cy4WGnK1HEpQjyfaqv07dFA6QHCUa281k5gFzqklFyqCUKoDRCkgSPKc3n+vjuH4u1bee2E1qA1BbkRcJ3aLH8w+TsK/uR7e0SwnWhBgsr+9AGreWvOhRIT/Lhaw+MoSC68zkwcfAhCU4VO8PM9rU0n/PON0MOFSRbkb/CzkPeONo47IDUFCYo1XuEcJF81nI4wSyPaTrQgQaf4qQgeEtV2YiNVQldeJ6TTA+pHe563ZHEUKHoIDXingt2dWmJoewihP4fwUk9viheEXHqI4YGXsZtLTJUZmmK4EIRA/y2CCsC3LGzcYhtV2oNNOfyXO9RrTk+CU2WeikSFee6nojEVh6iivlYzf8nEIwEGAJf38U+bVlRCAAAAAElFTkSuQmCC"></image>
  </view>
</view>
`;

const style = {
  container: {
    width: 300,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  itemBox: {
    width: 80,
    height: 60,
  },
  red: {
    backgroundColor: '#ff0000',
  },
  green: {
    backgroundColor: '#00ff00',
  },
  blue: {
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: 80,
    height: 60,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
};

export default {
  wxml,
  style,
};
