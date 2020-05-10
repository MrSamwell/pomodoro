new Vue({
    el: '#app',
    data: {
        display: true,
        isPlaying: false,
        st_worktime: 25,
        st_shortbreak: 5,
        st_longbreak: 25,
        worktime: 25,
        shortbreak: 5,
        longbreak: 25
    },
    methods:{
        changeDisplay: function(){
            this.display = !this.display;
        },
        applyChanges: function(){
           this.changeDisplay();
           this.worktime = this.st_worktime;
           this.shortbreak = this.st_shortbreak;
           this.longbreak = this.st_longbreak;
        //    console.log(`Worktime: ${this.worktime }, Shortbreak: ${this.shortbreak}, LongBreak ${this.st_longbreak}`);
        },
        cancelChanges: function(){
            this.changeDisplay();
            this.st_worktime = this.worktime;
            this.st_shortbreak = this.shortbreak;
            this.st_longbreak = this.longbreak;

            // console.log(`Worktime: ${this.worktime }, Shortbreak: ${this.shortbreak}, LongBreak ${this.st_longbreak}`);
         }
        
    }
})