const app = new Vue({
    el: '#app',
    data: {
        postcode: null,
        data: {}
    },
    methods: {
        date: function () {
            const self = this;
            dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado") 
            monName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")
            selfdata = + dayName[now.getDay() ] + ", " + now.getDate () + " de " + monName [now.getMonth() ];
        }
    }   
})