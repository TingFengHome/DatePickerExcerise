new Vue({
  el: '#app',
  data: {
    tags: '日一二三四五六',
    days:[],
    selectedDay: 0,
    startDay: 1,
    lunarPan: 5,
  },
  mounted() {
    for(var i = 1; i <= 31; i++){
      var newDay = {
        ADday: i,
        events: [
          {name: 'test'},
        ]
      };
      this.days.push(newDay);
    }
  },
  methods: {
    getPan(id){
      if (id!=0)
        return null;
      else 
        return {'margin-left':'calc('+this.startDay+' * 100% / 7)'};
    },
    chineseADdays(ADdays){
      var list='十一二三四五六七八九'
      return list[ADdays];
    },
    lunar(ADdays){
      if (ADdays > 30){
        ADdays = ADdays % 30;
      };
      if (ADdays <= 10){
        return '初' + this.chineseADdays(ADdays % 10);
      }else if (ADdays < 20){
        return '十' + this.chineseADdays(ADdays % 10);
      }else if (ADdays == 20){
        return '二十';
      }else if (ADdays < 30){
        return '廿' + this.chineseADdays(ADdays % 10);
      }else if (ADdays == 30){
        return '三十';
      };
    }
  }
})