// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    
  },

  onLoad() {

  },

  addData(){
    wx.navigateTo({
      url: '/pages/demo/demo'
    })
  },

  addTable(){
    wx.navigateTo({
      url: '/pages/table/table'
    })
  },

  
})
