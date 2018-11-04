new Vue({
  el: '#app',
  data: {
    tags: '日一二三四五六',
    days:[],
    selectedDay: 0,
    startDay: 1,
    lunarPan: 5,
  },

  computed: {
    nowEvents(){
      var day = this.days[this.selectedDay];
      if (day){
        return day.events;
      }else{
        return [];
      }
    },
  },

  mounted() {
    for(var i = 1; i <= 31; i++){
      var newDay = {
        ADday: i,
        events: []
      };

      if (Math.random()<0.4){
        var count = Math.random() * 3;
        var minute = parseInt(Math.random()*4)*10;
        for( o = 0; o < count; o++){
          newDay.events.push({
            title: ['整理房間','約會','學習程式語言','運動','看書']
            [parseInt(Math.random()*5)],
            time: parseInt(Math.random()*24) + ':' + (minute==0?'0':'') + minute
          });
        }
      }

      this.days.push(newDay);
    };  
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