//Chama a função atraves do botão
//o nome declarado no HTML tem que ser o mesmo aqui
//Function + nome 
var execs=0
var nomeFilmeLoc=['Baby Drive','Toy Story']
var imgBanner=['https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_UX182_CR0,0,182,268_AL_.jpg','https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg']
var trailerSave=['https://www.youtube.com/embed/D9YZw_X5UzQ','https://www.youtube.com/embed/v-PjgYDrg70']
iniciar(nomeFilmeLoc,imgBanner,trailerSave)


//recarg(nomeFilmeLoc,imgBanner,trailerSave)
console.log(iniciar)
function iniciar(nome,banner,save){
  var h = 0
  var qtdNomes = banner.length
  while(h<qtdNomes){
  
    var valorPos=banner.value
    var puxa = banner[h]
     console.log(banner)
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src="+puxa+">"
    listaFilmes.innerHTML = listaFilmes.innerHTML+elementoFilme
    h=h+1
  }
  
}
//  function recarg(){
  recarregar(nomeFilmeLoc,imgBanner,trailerSave)
//    console.log(recarregar)
//       //var limparDe = input.val("")

//       //var limparDs = document.getElementById('listaFilmes').reset()

    
 
    
   function recarregar(){
      var listaFilmes = document.querySelector('#listaFilmes')
      
     listaFilmes.innerHTML=`<div id="youtube">
        
 </div>`
iniciar(nomeFilmeLoc,imgBanner,trailerSave)
//         while(execs<qtdNomes){
  
//         var valorPos=banner.value
//         var puxar = banner[execs]
//         console.log(banner)
//         var listaFilmeS = document.querySelector('#listaFilmes')
//         var elementoFilme = "<img src="+puxar+">"
//         listaFilmeS.innerHTML = listaFilmeS.innerHTML+elementoFilme
//         execs=execs+1
//      }
  }


function playVideo(){
  var nomeFilme=document.querySelector('#nome').value
    if(nomeFilme!=""){
     var limparD = document.getElementById('listaFilmes').innerHTML = '';
      var substringS=nomeFilmeLoc.length
    //console.log(substringS)
      var calc=nomeFilmeLoc.indexOf(nomeFilme)
    //console.log(calc)
      var trailerLock= trailerSave[calc]//trailerSave.indexOf(nomeFilme)
    //console.log(trailerLock)
      listarfilmesNaTela(trailerLock)
      console.log(trailerLock)
       function listarfilmesNaTela(video){
          
          
         if(video.startsWith('https://www.youtube.com/embed/')){
           limparD
            var listaFilmes = document.querySelector('#listaFilmes')
            var elementoIner = "<iframe src="+video+">"
            listaFilmes.innerHTML = listaFilmes.innerHTML+elementoIner
         }
       }
    }
}

  

function adicionarFilme(){
var nomeFilme=document.querySelector('#nome').value
console.log(nomeFilme)
var endImg=document.querySelector('#filme').value
console.log(endImg)
var endTrailer=document.querySelector('#trailer').value
console.log(endTrailer)

if(nomeFilme!=""){
    if(endImg!=""){
      if(endTrailer!=""){
        
        nomeFilme.value=""
        listarfilmesNaTela(nomeFilme,endImg,endTrailer,execs)
        
        function listarfilmesNaTela(name,filme,video,execucao){
        if(filme.endsWith('.jpg')){
          var listaFilmes = document.querySelector('#listaFilmes')
          var elementoFilme = "<img src="+filme+">"
          listaFilmes.innerHTML = listaFilmes.innerHTML+elementoFilme
          imgBanner= elementoFilme
          var substuir = video.replace('https://youtu.be/','https://www.youtube.com/embed/')
          trailerSave = substuir
          console.log(nomeFilme)
          console.log(imgBanner)

          }
        console.log(filme)
       /*if(video.startsWith('https://youtu.be/')){
          var substuir =    video.replace('https://youtu.be/','https://www.youtube.com/embed/')
          console.log(substuir)
          var listaFilmes = document.querySelector('#listaFilmes')
          var elementoFilme = "<iframe src="+substuir+">"
          listaFilmes.innerHTML = listaFilmes.innerHTML+elementoFilme

       }*/
        }
       
      }
      else{
        alert("Digite o link do Trailer do filme antes")
      }

    }
    else{
      alert("Digite o link do banner do filme antes")
        }
}
else{
  alert("Digite o nome do Filme antes")
  }
}

/*function youtube(video){
var substuir =    video.replace('https://youtu.be/','https://www.youtube.com/embed/')
console.log(substuir)
var listaFilmes = document.querySelector('#youtube')
var elementoFilme = "<iframe src="+substuir+">"
listaFilmes.innerHTML = listaFilmes.innerHTML+elementoFilme
}*/