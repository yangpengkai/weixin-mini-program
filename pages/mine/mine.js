// pages/mine/mine.js
Page({

  /**
   * 页面初始化数据
   */
  data: {
    msg: "hello mina-program",
    list: [{
        id: 0,
        name: '张三',
        age: 18
      },
      {
        id: 1,
        name: '李四',
        age: 20
      },
      {
        id: 2,
        name: '王五',
        age: 21
      }
    ],
    isagent: 1,
    ishidden: false,
    num: 0
  },

  oninput(e) {
    this.setData({
      num: e.detail.value
    })
  },
  //这里是添加和删除按钮的事件
  handletap(e) {
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      num: this.data.num + operation
    })
  },

  handleishidden() {
    this.setData({
      ishidden: !ishidden,
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  }
})