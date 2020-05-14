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
        displayTime: 0,
        counter: 0
        
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

         startTimer: function(){
           
            
             this.isPlaying = !this.isPlaying;
             if(this.counter == 4){
                this.counter = 0;
                this.displayTime = this.worktime;
                
                document.documentElement.style.setProperty('--primary', "#FF3860");

             } 
            
            var vm = this;
            var root = document.documentElement;
           
           
                if(vm.isPlaying){
                    var workInterval = setInterval(workTimer ,1000);
                    var breakInterval;
                
            }

            function workTimer(){
                    if(vm.isPlaying){
                        if(vm.displayTime == 0){
                            vm.$refs.end.play();
                            clearInterval(workInterval);
                            if(vm.counter == 3){
                                root.style.setProperty('--primary', "#48C774");
                                vm.displayTime = vm.longbreak *60;
                            }
                            else{
                                root.style.setProperty('--primary', "#209CEE");
                                vm.displayTime = vm.shortbreak *60;
                            }
                            breakInterval = setInterval(breakTimer,1000);
                        } 
                        else{

                            vm.displayTime -=1;
                            
                        }
                    }
                    else{
                        clearInterval(workInterval);
                    }
            }

            function breakTimer(){
                if(vm.isPlaying){

                                if(vm.displayTime == 0){
                                    
                                    clearInterval(breakInterval);
                                    vm.counter++;
                                    if(vm.counter <4){
                                        vm.$refs.start.play();
                                        root.style.setProperty('--primary', "#FF3860");
                                        vm.displayTime = vm.worktime *60;
                                        clearInterval(breakInterval);
                                        workInterval = setInterval(workTimer ,1000);
                                    }
                                    else{
                                        vm.$refs.completed.play();
                                        vm.isPlaying = !vm.isPlaying;
                                    }

                                } 
                                else{
                                    vm.displayTime -=1;
                                    
                                }
                    }
                    else{
                        clearInterval(breakInterval);
                    }
                }

         },
         isCompleted: function(index){
            if(index < this.counter){
                return true;
            }
            else{
                return false;
            }
        }
         
         
    },

    watch: {
        

    },
         
        mounted: function(){
        
            this.displayTime = this.worktime *60;
            
        }
            
    
})