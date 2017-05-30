//home.js
//获取应用实例
var app = getApp()
Page({
  data: {

  },
  onPullDownRefresh: function () {
    console.log('----下拉刷新----');
    wx.showNavigationBarLoading();
    setTimeout(function(){
      wx.hideNavigationBarLoading();
    },10000);
  // wx.request({
  //   url: '',
  //   data:{},
  //   method:'GET',
  //   success:function(){},
  //   fail:function(){},
  //   complete:function(){
  //     wx.hideNavigationBarLoading();
  //     wx.stopPullDownRefresh();
  //   }
  // })

    wx.stopPullDownRefresh();
  },
  bindDetail:function(){
    wx.navigateTo({
      url:'../detail/detail'
    });
  },
  bindAdd: function () {
    wx.navigateTo({
      url: '../add/add'
    })
  },
  onLoad: function () {
    // wx.request({
    //   url: '',
    // });
    app.getUserInfo(function (userInfo) {
      //更新数据
    // debugger;
    })
    var position = wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        var speed = res.speed;
        var accuracy = res.accuracy;
        wx.showToast({
          title: '位置信息:'+latitude+','+longitude,
          icon: 'success',
          duration: 2000
        })
      }
    })
  }
})
