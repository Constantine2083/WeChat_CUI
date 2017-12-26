// CUI_Components/button/button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    class: {
      type: String,
      value: ''
    },
    text: {
      type: String,
      value: '确定'
    },
    btnType: {
      type: String,
      value: 'default'
    },
    size: {
      type: String,
      value: 'default'
    },
    shadow: {
      type: String,
      value: 'no'
    },
    funData: {
      type: Object,
      value: {}
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
    insideFun: function (e){
      let takeInObj = this.properties.funData;
      let sendObj = {
        thisEven: e,
        data: takeInObj
      }

      // console.log(e);
      this.triggerEvent('clickFun', sendObj)
    }
  }
})
