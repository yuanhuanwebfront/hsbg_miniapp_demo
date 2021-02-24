Component({

  properties: {
    item: {
      type: Object,
      value: {}
    },
    index: {
      type: Number,
    },
    columns: {
      type: Object,
      value: {}
    },
    dynamicValue: {
      type: Object,
      value: {}
    }
  },

  methods: {
    handleClickItem(e) {
      console.log(e.currentTarget)
      const { type } = e.currentTarget.dataset;
      const { index, item } = this.data;
      this.triggerEvent('clickaction', {
        value: {
          type,
          index, 
          item
        }
      });
    }
  },




})