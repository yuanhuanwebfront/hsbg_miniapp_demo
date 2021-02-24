import areaList from '../../config/address';

Page({
  data: {
    radio: '1',
    value: '',
    rate: 2,
    checked: false,
    checkboxStatus: false,
    date: '',
    showCalendar: false,
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    maxDate: new Date(2026, 10, 1).getTime(),

    datetime: '',
    datetimeStr: '',
    showDate: false,

    selectStatus: false,
    actions: [
      { name: '选项1'},
      { name: '选项2'},
      { name: '选项3'},
    ],

    addressStatus: false,
    areaList: areaList,
    address: [],
    addressStr: '请选择地址'

  },
  onChange(e){
    this.setData({
      radio: e.detail
    })
  },

  switchChange(e){
    this.setData({
      checked: e.detail
    })
  },

  checkboxChange(e){
    this.setData({
      checkboxStatus: e.detail
    })
  },

  show(){
    this.setData({
      showCalendar: true
    })
  },
  onCloseCalendar(){
    this.setData({
      showCalendar: false
    })
  },

  formatTime(time){
    let date = new Date(time);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  },
  formatDateTime(time){
    console.log(time)
    let date = new Date(time);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  },

  onConfirmCalendar(e){
    this.setData({
      showCalendar: false,
      date: this.formatTime(e.detail)
    })
  },

  showDatetime(){
    this.setData({
      showDate: true
    })
  },

  closeDatetime(){
    this.setData({
      showDate: false
    })
  },
  onInput(e){
    this.setData({
      datetime: e.detail
    })
  },
  confirmDatetime(){
    let vm = this;
  
    this.setData({
      showDate: false,
      datetimeStr: this.formatDateTime(vm.data.datetime)
    })
  },

  showSelect(){
    this.setData({
      selectStatus: true
    })
  },
  onChooseSelect(e){
    let { name } = e.detail,
        str = '选择的选项是：' + name;

    wx.showToast({
      icon: 'none',
      title: str,
      duration: 3000
    })
  },
  onCloseSelect(){
    this.setData({
      selectStatus: false
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