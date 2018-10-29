new Vue({
  el: '#app',
  data: {
    tags: '一二三四五六日',
    days:[],
    selectedDay: 0,
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
})