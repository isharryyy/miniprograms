// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImg: [{
      id: 0,
      imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583512968927&di=91c0f65fb8d038e7b42a079780408dc6&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2017%2F1222%2F5646C1ED626DC6AB54074431560D5064A07B2D62_size87_w600_h406.jpeg",
      name: "北京烤鸭"
    }, {
        id: 1,
        imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583513022786&di=6d918b873698b55aeae57779a8672fec&imgtype=0&src=http%3A%2F%2Fimg.article.pchome.net%2F00%2F23%2F22%2F32%2Fpic_lib%2Fs960x639%2F31s960x639.jpg",
        name: "萝卜炖鸡"
    }, {
        id: 2,
        imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583513253718&di=03b146671fc994bca8127e10da4b050d&imgtype=0&src=http%3A%2F%2Fm.tuniucdn.com%2Ffb2%2Ft1%2FG2%2FM00%2F38%2F46%2FCii-T1etsPSIRnagABX6Sd9FXCYAABJWwB9aLYAFfph21_w500_h280_c1_t0.jpeg",
        name: "新疆羊肉串"
    }],
    select1: true,
    select2: false,
    select3: false,
    search: false,
    position: ""
  },

  /**
   * 点击排序更改样式
   */
  active(e) {
    console.log(e);
    if(e.currentTarget.dataset.id === "1") {
      this.setData({
        select1: true,
        select2: false,
        select3: false
      })
    } else if (e.currentTarget.dataset.id === "2") {
      this.setData({
        select1: false,
        select2: true,
        select3: false
      })
    } else {
      this.setData({
        select1: false,
        select2: false,
        select3: true
      })
    }
  },

  /**
   * 生命周期函数--滚动条滚动
   */
  onPageScroll: function (e) {
    console.log(e);
    if(e.scrollTop >= 100) {
      this.setData({
        search: true
      })
    } else {
      this.setData({
        search: false
      })
    }
  },

  /**
   * 城市定位
   */
  currentLocation() {
    let that = this;
    wx.getLocation({
      type: "wgs84",
      success(res) {
        console.log(res);
        wx.request({
          url: "http://api.go2map.com/engine/api/regeocoder/json?points=" + res.longitude + "," + res.latitude + "&type=1",
          success(res) {
            that.setData({
              position: res.data.response.data[0].city
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.currentLocation();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})