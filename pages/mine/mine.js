const app = getApp();

Page({

  data: {
    userName: '点击登录',
    userImage: 'https://pic3.zhimg.com/80/v2-814c792105e9c40a478f3117d9cc478e_720w.png'
  },

  onLoad(){
    wx.getUserInfo({
      success: (res) => {
        let userInfo = res.userInfo;

        this.setUserInfo(userInfo);
      }
    })
  },

  getUser(event){
    let userInfo = event.detail.userInfo;

    this.setUserInfo(userInfo);
  },

  setUserInfo(userInfo){
    app.globalData.userInfo = userInfo;

    this.setData({
      userName: userInfo.nickName,
      userImage: userInfo.avatarUrl
    })

  }

})