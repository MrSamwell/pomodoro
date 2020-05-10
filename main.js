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
        longbreak: 25,
        displayTime: false
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
           this.displayTime = this.worktime * 60;
        //    console.log(`Worktime: ${this.worktime }, Shortbreak: ${this.shortbreak}, LongBreak ${this.st_longbreak}`);
        },
        cancelChanges: function(){
            this.changeDisplay();
            this.st_worktime = this.worktime;
            this.st_shortbreak = this.shortbreak;
            this.st_longbreak = this.longbreak;

            // console.log(`Worktime: ${this.worktime }, Shortbreak: ${this.shortbreak}, LongBreak ${this.st_longbreak}`);
         },
         formatDisplay: function(sec){
             if(this.displayTime == ''){
            this.displayTime = this.worktime * 60;}

            var minutes = Math.floor(sec/60);
            var seconds = sec%60;

            if(minutes >= 0 && minutes<=9){
                minutes = '0' + minutes
            }
            if(seconds >= 0 && seconds<=9){
                seconds = '0' + seconds
            }
            
            return `${minutes}:${seconds}`
         },
         btnPlayClicked: function(){
             this.isPlaying = !this.isPlaying;
             this.startTimer();
         },
         startTimer: function() {
             while(this.isPlaying){
                 setTimeout(this.startTimer, 1000);
                 this.displayTime -= 1;  
             }
         },
        mounted: function(){
           
           
        }
    }
})