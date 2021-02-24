Page({

  data: {
    tableColumns: [{
      title: "姓名",
      key: "name",
    }, {
      title: "年龄",
      key: "age",
    }, {
      title: "性别",
      key: "sex",
    }],
    tableWidthColumns: [
      {
        title: "姓名",
        key: "name",
        width: '200rpx'
      }, {
        title: "年龄",
        key: "age",
        width: '400rpx'
      }, {
        title: "性别",
        key: "sex",
        width: '800rpx'
      }
    ],
    tableActionColumns: [
      {
        title: "姓名",
        key: "name",
      }, {
        title: "年龄",
        key: "age",
      }, {
        title: "性别",
        key: "sex",
      },{
        title: "操作",
        key: "action",
        type: "action"
      }
    ],
    tableDesignColumns: [
      {
        title: "开关",
        type: "action",
        key: "switch",
      }, {
        title: "评分",
        type: "action",
        key: "rate",
      }, {
        title: "性别",
        key: "sex"
      }
    ],

    dataList: [],
    // 请求列表的loading
    getListLoading: false,
    // 无数据时的提示文本图片
    showTipImage: false,
  },

  onReady(){
    this.setData({getListLoading: true})

    setTimeout(() => {
      this.setData({
        dataList: [
          {id: 1, name: '张三', age: 20, sex: '男', mobile: '13333333333', rate: 1, switch: false},
          {id: 2, name: '李四', age: 30, sex: '男', mobile: '12222222222', rate: 2, switch: true},
          {id: 3, name: '王五', age: 40, sex: '男', mobile: '14444444444', rate: 3, switch: false},
          {id: 4, name: '赵六', age: 50, sex: '女', mobile: '15555555555', rate: 4, switch: true}
        ],
        getListLoading: false
      })
    }, 2000)
  },


  handleClickAction(e){
    console.log(e)
  }




})