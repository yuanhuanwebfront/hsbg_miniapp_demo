import areaList from '../../config/address';

Page({

  data: {

    date: '',
    dateShow: false,

    checkbox: [],

    currentDate: new Date().getTime(),
    datetimeShow: false,
    datetimeStr: '',

    inputValue: '默认值',

    pickerList: ['杭州', '宁波', '温州', '嘉兴', '湖州'],

    radio: '1',

    rateValue: 3,

    switchValue: true,

    dropOption1: [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ],
    dropOption2: [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' },
    ],
    dropValue1: 0,
    dropValue2: 'a',

    shareShow: false,
    shareOptions: [
      { name: '微信', icon: 'wechat', openType: 'share' },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
    ],

    progress: 30,

    activeNames: ['1'],

    steps: [
      {
        text: '步骤一',
        desc: '描述信息',
      },
      {
        text: '步骤二',
        desc: '描述信息',
      },
      {
        text: '步骤三',
        desc: '描述信息',
      },
      {
        text: '步骤四',
        desc: '描述信息',
      },
    ],
    activeStep: 1,


    addressStatus: false,
    areaList: areaList,
    address: [],
    addressStr: '请选择地址'

  },

  toDouble(num){
    return num >= 10 ? num : '0' + num
  },
  formatDate(time){
    let date = new Date(time);

    return `${date.getFullYear()}-${this.toDouble(date.getMonth() + 1)}-${this.toDouble(date.getDate())}`
  },
  formatDateTime(time){
    let date = new Date(time);
    return `${date.getFullYear()}-${this.toDouble(date.getMonth() + 1)}-${this.toDouble(date.getDate())} ${this.toDouble(date.getHours())}:${this.toDouble(date.getMinutes())}:${this.toDouble(date.getSeconds())}`
  },



  showCalendar(){
    this.setData({
      dateShow: true
    })
  },
  hideCalendar(){
    this.setData({
      dateShow: false
    })
  },
  confirmCanlendar(e){
    let timeArr = e.detail,
        str = this.formatDate(timeArr[0]) + '至' + this.formatDate(timeArr[1]);

    this.setData({
      date: str,
      dateShow: false
    })
  },

  onCheckboxChange(e){
    this.setData({
      checkbox: e.detail
    })
  },

  showDatetime(){
    this.setData({
      datetimeShow: true
    })
  },
  closeDatetime(){
    this.setData({
      datetimeShow: false
    })
  },
  confirmDatetime(){
    let vm = this;
  
    this.setData({
      datetimeShow: false,
      datetimeStr: this.formatDateTime(vm.data.currentDate)
    })
  },
  onInput(e){
    this.setData({
      currentDate: e.detail
    })
  },


  onPickerChange(e){
    wx.showToast({
      title: `选择的是:${e.detail.value}`,
      icon: 'none'
    })
  },

  onRadioChange(e){
    this.setData({
      radio: e.detail
    })
  },

  onRateChange(e){
    this.setData({
      rateValue: e.detail,
    });
  },

  onSliderChange(e){
    wx.showToast({
      icon: 'none',
      title: `当前值：${e.detail}`
    });
  },

  onSwitchChange(e){
    this.setData({
      switchValue: e.detail
    })
  },

  showShare(){
    this.setData({shareShow: true})
  },
  hideShare(){
    this.setData({shareShow: false})
  },

  addProgress(){
    let progress = this.data.progress + 5;
    this.setData({
      progress: this.data.progress >= 100 ? 100 : progress
    })
  },
  minusProgress(){
    let progress = this.data.progress - 5;
    this.setData({
      progress: this.data.progress <= 0 ? 0 : progress
    })
  },

  onCollapseChange(e){
    this.setData({
      activeNames: e.detail,
    });
  },

  toNextStep(){
    let step = ++this.data.activeStep;

    this.setData({
      activeStep: step >= this.data.steps.length ? (step - 1) : step
    })
  },


  showAddress(){
    this.setData({addressStatus: true})
  },
  addressChange(e){
    this.setData({
      address: e.detail.values
    })
  },
  confirmAddress(){
    let strArr = this.data.address.map(item => {
      return item.name;
    })

    this.setData({
      addressStatus: false,
      addressStr: strArr.join('-')
    })
  }



})