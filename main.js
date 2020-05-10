new Vue({
    el: '#app',
    data: {
        display: true,
        worktime: 25,
        shortbreak: 5,
        longbreak: 25
    },
    methods:{
        changeDisplay: function(){
            this.display = !this.display;
        },
        
    }
})