// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: ["热销", "新品", "蔬菜", "水果", "主食", "饮料", "酒水"],
    productList: [{
      imgUrl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2225307848,1039088297&fm=26&gp=0.jpg",
      name: "菠菜",
      price: 3.5,
      saleCount: 560
    }, {
      imgUrl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3489603728,464939185&fm=26&gp=0.jpg",
      name: "菠菜",
      price: 3.5,
      saleCount: 560
    }, {
      imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583775968662&di=9c87d2d836d47c4a27e8e01264b7bd23&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F9391c67cc9eb2ff586c977871c6c29f55edf3ee1.jpg",
      name: "菠菜",
      price: 3.5,
      saleCount: 560
    }, {
      imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583775983515&di=3ffd3a9965ed1042425655b06dd5d882&imgtype=0&src=http%3A%2F%2Fwww.luyangfoods.com%2Fmanage%2FeWebEditor%2FUploadFile%2F2013524162339.jpg",
      name: "菠菜",
      price: 3.5,
      saleCount: 560
    }, {
      imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583776003947&di=9ca065ac868b86df1250ee27911a0da1&imgtype=0&src=http%3A%2F%2F5106595.s21i-5.faiusr.com%2F2%2FABUIABACGAAgpqi1rwUo-daxFTDuBTi-BA.jpg",
      name: "菠菜",
      price: 3.5,
      saleCount: 560
    }, {
      imgUrl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=409148690,115544273&fm=26&gp=0.jpg",
      name: "菠菜",
      price: 3.5,
      saleCount: 560
    }, {
      imgUrl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3753811693,3579426430&fm=26&gp=0.jpg",
      name: "菠菜",
      price: 3.5,
      saleCount: 560
    }],
    menuNumber: "0",
    cartList: [],
    total: 0,
    preferentialPrice: 0,
    myChoose: true
  },

  /**
   * 分类菜单点击
   */
  menuActive(e) {
    this.setData({
      menuNumber: e.currentTarget.dataset.id
    })
  },

  /**
   * 添加至购物车
   */
  addToCart(e) {
    let that = this;
    this.data.cartList.push(e.currentTarget.dataset.product);
    console.log(this.data.cartList);
    this.data.cartList.forEach( (item, index) => {
      that.data.total = that.data.total + item.price;
    })
    if (this.data.total >= 30 && this.data.total < 60) {
      this.data.preferentialPrice = this.data.total - 11;
    } else if (this.data.total >= 60 && this.data.total < 100) {
      this.data.preferentialPrice = this.data.total - 19;
    } else if (this.data.total >= 100) {
      this.data.preferentialPrice = this.data.total - 35;
    } else {
      this.data.preferentialPrice = this.data.total
    }
    console.log(this.data.total, this.data.preferentialPrice)
    this.setData({
      cartList: this.data.cartList,
      total: this.data.total,
      preferentialPrice: this.data.preferentialPrice
    })
  },

  /**
   * 展开购物车
   */
  showInfo() {
    console.log(this.data.cartList)
    this.setData({
      myChoose: !this.data.myChoose
    })
  },

  /**
   * 删除物品
   */
  remove(e) {
    console.log(e.currentTarget.dataset.index)
    this.data.cartList.splice(e.currentTarget.dataset.index, 1);
    this.setData({
      cartList: this.data.cartList
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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