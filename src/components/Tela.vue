<template>
<body>
  <form>
      <div id="fundo">
      <div class="app"> 
        <div class="telaCelular" id="app" >
          <img src="../assets/celular.png" @load="carregarData">
          <div id="componentesTela">
              <h6>{{horaCompleta}}</h6>
              <h1>{{horaCompleta}}</h1>
              <h4>{{dataCompleta}}</h4>
          <button @click="carregarGit"><h3>Clique para desbloquear</h3></button>
          </div>
        </div>
        </div>
      </div>  
    </form>
</body>
</template>

<script type="text/javascript">
    export default {
    data() {
        return {
            dataCompleta: '00:00',
            horaCompleta: '00:00',
            informacoesGit: ''
        }
    },
    methods: {
        carregarData() {
        var mydate=new Date()
	      var year=mydate.getYear()
	      if (year<2000)
      	year += (year < 1900) ? 1900 : 0
	      var day=mydate.getDay()
	      var month=mydate.getMonth()
        var daym=mydate.getDate()
        var minutes = mydate.getMinutes()
        var hours = mydate.getHours()
        if(hours<10)
          hours = "0"+hours
        if(minutes<10)
          minutes = "0"+minutes
	      if (daym<10)
      	  daym="0"+daym
      	var dayarray=new Array("Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado")
      	var montharray=new Array(" de Janeiro"," de Fevereiro"," de Março","de Abril","de Maio","de Junho","de Julho","de Agosto ","de Setembro"," de Outubro"," de Novembro"," de Dezembro")
	
        this.horaCompleta = hours + ':' + minutes ;
        this.dataCompleta = dayarray[day] + ', ' + daym + montharray[month] ;
         
        },
        carregarGit(){ 
          axios.get('https:api.github.com/users/LuaneASantos').then(function(response){
            console.log(response);
            console.log(response.data.avatar_url)
          }).catch(function(error){
            console.log(error);
          });
        }
    }

}
</script>

<style>

#fundo {
background-color: #cccccc;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
}

.telaCelular {
    display:inline-block;
    position:relative;
}
.telaCelular button {
    position:absolute;
    top: 80%;
    left:50%;
    -webkit-transform:translate3d(-50%, -50%, 0);
    -moz-transform:translate3d(-50%, -50%, 0);
    transform:translate3d(-50%, -50%, 0);
    height: 45px;
    width: 250px;
    border-radius: 15px;
    text-align: center;
    background-color: #f8f8f6;
}

.telaCelular h1 {
    position:absolute;
    top: 20%;
    left:50%;
    -webkit-transform:translate3d(-50%, -50%, 0);
    -moz-transform:translate3d(-50%, -50%, 0);
    transform:translate3d(-50%, -50%, 0);
    height: 45px;
    width: 250px;
    border-radius: 15px;
    text-align: center;
    font-family:  "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    font-size: 70px;
  }

.telaCelular h6 {
    position:absolute;
    top: 12%;
    left:50%;
    -webkit-transform:translate3d(-50%, -50%, 0);
    -moz-transform:translate3d(-50%, -50%, 0);
    transform:translate3d(-50%, -50%, 0);
    height: 45px;
    width: 250px;
    border-radius: 15px;
    text-align: center;
    font-family:  "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    font-size: 13px;
    
}

.telaCelular h3 {
    position:absolute;
    top: 25%;
    left:50%;
    -webkit-transform:translate3d(-50%, -50%, 0);
    -moz-transform:translate3d(-50%, -50%, 0);
    transform:translate3d(-50%, -50%, 0);
    height: 45px;
    width: 250px;
    border-radius: 15px;
    text-align: center;
    font-family:  "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    font-size: 18px;
    color: #545454;
}

.telaCelular h4 {
    position:absolute;
    top: 35%;
    left:50%;
    -webkit-transform:translate3d(-50%, -50%, 0);
    -moz-transform:translate3d(-50%, -50%, 0);
    transform:translate3d(-50%, -50%, 0);
    height: 45px;
    width: 250px;
    border-radius: 15px;
    text-align: center;
    font-family:  "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    font-size: 13px;
}

</style>

