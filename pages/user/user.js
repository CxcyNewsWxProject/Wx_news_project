// pages/user/user.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: null,
    userphoto: '/images/people.png',
    
     items2: [{ id: '0', title: '电商' }, { id: '1', title: '社交' }, { id: '2', title: '硬件' },
              { id: '3', title: '传媒' }, { id: '4', title: '文娱' }, { id: '5', title: '工具' },
              { id: '6', title: '消费生活' }, { id: '7', title: '金融' }, { id: '8', title: '医疗健康' },
              { id: '9', title: '企业服务' }, { id: '10', title: '旅游' }, { id: '11', title: '房产家居' },
              { id: '12', title: '教育' }, { id: '13', title: '汽车交通' }, { id: '14', title: '物流' },
              { id: '15', title: '人工智能' }, { id: '16', title: '无人机' }, { id: '17', title: '机器人' },
              { id: '18', title: 'VR-AR' }, { id: '19', title: '体育' }],
     
   
     //按钮设置
     currentTab: 0 ,

  },
 
  
  navbarTap: function (e) {
    //console.log(e)
      this.setData({
      currentTab: 0 
    })
 
      var id = e.currentTarget.dataset.idx;
       console.log(id)
       
      //新闻列表刷新
      var that=this;
      wx.request({
        url: 'http://101.201.68.38:8000/postapi/postapi/?format=json',

        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          console.log(res)
        

          that.setData({
            articles: res.data,
          })

        }
      })
  } ,
  navbarTap1: function (e){
   // console.log(e)
    this.setData({
      currentTab:1
    })

    var id = e.currentTarget.dataset.idx;
    console.log(id)
    
  },
 
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  onArticleClicked: function (e) {
    var aid = e.currentTarget.dataset.aid
    wx.navigateTo({
      url: '/pages/details/details?_id=' + aid
    })

   
  },

 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://101.201.68.38:8000/postapi/postapi/?format=json',

      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)

        that.setData({
          articles: res.data,
        })

      }
    }),
   
    
   
  

      app.getUserInfo(function (userInfo) {
        //更新数据
        that.setData({
          userInfo: userInfo
        })
      })
      
    
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

  },

  button0: function (res) {

    var id = res.target.id;
    console.log(id)
    console.log(res)

    //  this.setData({
    //    changeColor: res.currentTarget.id
    //  })
    var changeColor0 = this.data.changeColor0;
    this.setData({
      changeColor0: !changeColor0
    })

  },
  button1: function (res) {
    var id = res.target.id;
    console.log(id)
    console.log(res)
    var changeColor1 = this.data.changeColor1;
    this.setData({
      changeColor1: !changeColor1
    })
  },
  button2: function (res) {
    var id = res.target.id;
    console.log(id)
    console.log(res)
    var changeColor2 = this.data.changeColor2;
    this.setData({
      changeColor2: !changeColor2
    })
  },
  button3: function (res) {
    var id = res.target.id;
    console.log(id)
    console.log(res)
    var changeColor3 = this.data.changeColor3;
    this.setData({
      changeColor3: !changeColor3
    })
  },
  button4: function (res) {
    var id = res.target.id;
    console.log(id)
    console.log(res)
    var changeColor4 = this.data.changeColor4;
    this.setData({
      changeColor4: !changeColor4
    })
  },
  button5: function (res) {
    var id = res.target.id;
    console.log(id)
    console.log(res)
    var changeColor5 = this.data.changeColor5;
    this.setData({
      changeColor5: !changeColor5
    })
  },
  button6: function (res) {
    var id = res.target.id;
    console.log(id)
    console.log(res)
    var changeColor6 = this.data.changeColor6;
    this.setData({
      changeColor6: !changeColor6
    })
  },
  button7: function (res) {
    var id = res.target.id;
    console.log(id)
    console.log(res)
    var changeColor7 = this.data.changeColor7;
    this.setData({
      changeColor7: !changeColor7
    })
  },
  button8: function (res) {
    var id = res.target.id;
    console.log(id)
    console.log(res)
    var changeColor8 = this.data.changeColor8;
    this.setData({
      changeColor8: !changeColor8
    })
  },
  button9: function (res) {
    var id = res.target.id;
    console.log(id)
    console.log(res)
    var changeColor9 = this.data.changeColor9;
    this.setData({
      changeColor9: !changeColor9
    })
  },
  button10: function (res) {
    var id = res.target.id;
    console.log(id)
    console.log(res)
    var changeColor10 = this.data.changeColor10;
    this.setData({
      changeColor10: !changeColor10
    })
  },
  button11: function (res) {
    var id = res.target.id;
    console.log(id)
    console.log(res)
    var changeColor11 = this.data.changeColor11;
    this.setData({
      changeColor11: !changeColor11
    })
  },
  button12: function (res) {
    var id = res.target.id;
    console.log(id)
    console.log(res)
    var changeColor12 = this.data.changeColor12;
    this.setData({
      changeColor12: !changeColor12
    })
  },
  button13: function (res) {
    var id = res.target.id;
    console.log(id)
    console.log(res)
    var changeColor13 = this.data.changeColor13;
    this.setData({
      changeColor13: !changeColor13
    })
  },
  button14: function (res) {
    var id = res.target.id;
    console.log(id)
    console.log(res)
    var changeColor14 = this.data.changeColor14;
    this.setData({
      changeColor14: !changeColor14
    })
  },
  button15: function (res) {
    var id = res.target.id;
    console.log(id)
    console.log(res)
    var changeColor15 = this.data.changeColor15;
    this.setData({
      changeColor15: !changeColor15
    })
  },
  button16: function (res) {
    var id = res.target.id;
    console.log(id)
    console.log(res)
    var changeColor16 = this.data.changeColor16;
    this.setData({
      changeColor16: !changeColor16
    })
  },
  button17: function (res) {
    var id = res.target.id;
    console.log(id)
    console.log(res)
    var changeColor17 = this.data.changeColor17;
    this.setData({
      changeColor17: !changeColor17
    })
  },
  button18: function (res) {
    var id = res.target.id;
    console.log(id)
    console.log(res)
    var changeColor18 = this.data.changeColor18;
    this.setData({
      changeColor18: !changeColor18
    })
  },
  button19: function (res) {
    var id = res.target.id;
    console.log(id)
    console.log(res)
    var changeColor19 = this.data.changeColor19;
    this.setData({
      changeColor19: !changeColor19
    })
  },
})