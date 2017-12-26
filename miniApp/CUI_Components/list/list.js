// CUI_Components/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: ''
    },
    url: {
      type: String,
      value: ''
    },
    jumpType: {
      type: String,
      value: 'navigate' // navigate([默认]保留并跳转)/redirect(关闭当前页跳转)/relaunch(关闭所有页跳转)
    },
    showIcon: {
      type: String,
      value: 'yes'
    },
    funData: {
      type: Object,
      value: {}
    },
    leftImg: {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    insideFun: function (e) {
      let url = this.properties.url;
      let jumpType = this.properties.jumpType;
      let takeInObj = this.properties.funData;
      let sendObj = {
        thisEven: e,
        data: takeInObj
      }

      if (url == '') {
        // 默认执行该事件，当不传URL的话 就执行点击事件，但是，当传入了URL时，就不执行点击事件
        this.triggerEvent('clickFun', sendObj);
        return;
      }else{
        // 当传入了URL，就需要传入 跳转方式，或者使用默认navigate跳转，否则会报错
        if (jumpType == 'navigate') {
          wx.navigateTo({
            url: url
          })
        } else if (jumpType == 'redirect') {
          wx.redirectTo({
            url: url
          })
        } else if (jumpType == 'reLaunch') {
          wx.redirectTo({
            url: url
          })
        } else {
          console.error('cui-list: jumpType error, please enter the correct "jump-type",We currently support the values:  navigate([默认]保留并跳转)/redirect(关闭当前页跳转)/relaunch(关闭所有页跳转)')
        }

      }

      // console.log(e);
    }
  }
})
