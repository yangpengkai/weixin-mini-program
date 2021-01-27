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
    isagent: 2,
    ishidden: true,
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
  onHide: function() {   //生命周期函数——页面隐藏时调用
    wx.showModal({
      title:'提示',
      content:'你真的要离开这个页面吗?',
      success(res){
        if(res.confirm){
          console.log('确定离开');
        }else if(res.cancel){
          console.log('不离开');
        }
      }
    });
  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() { //生命周期函数——页面卸载时调用

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() { //页面事件处理程序函数--在用户下拉列表时调用

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() { //当页面到达底部时调用

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() { //当用户单击右上角共享时调用

  }
})
