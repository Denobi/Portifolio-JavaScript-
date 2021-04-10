
var listaDePokemons = parseInt(prompt("Escolha o pokémon que deseja saber a evolução:"+ "\n" + "1 - Todas do Bulbasaur."+ "\n" + "2 - Todas do Charmander."+ "\n" +"3 - Todas do Squirtle. "+ "\n" + "4 - Todas do Pikachu."))

if(listaDePokemons == 1){
  var pkBulbas = parseInt(prompt("Escolha o pokémon que deseja saber a  evolução:"+ "\n" + "1 - Bulbasaur."+ "\n" + "2 - Ivysaur."+ "\n" +"3 - Venusaur. "))
      if(pkBulbas == 1){
        document.write("<h2> Bulbasaur Evolui para Ivysaur </h2>")
        window.onload = function imageOption() {
          document.getElementById("imageoption").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png";
          //document.write("<h3> = Ivysaur </h3>")
          document.getElementById("imageoptions").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png";

        }
      }

      if(pkBulbas == 2){
        document.write("<h2> Ivysaur Evolui para Venusaur </h2>")
        window.onload = function imageOption() {
          document.getElementById("imageoption").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" ;
         
          document.getElementById("imageoptions").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png";
        }
      }
      if(pkBulbas == 3 ){
        document.write("<h2>Venusaur não Evolui</h2>")
        window.onload = function imageOption() {
          document.getElementById("imageoption").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png";
        }
      }
 
}
/* */
if(listaDePokemons == 2){
  var pkCharm = parseInt(prompt("Escolha o pokémon que deseja saber a  evolução:"+ "\n" + "1 - Charmander."+ "\n" + "2 - Charmeleon ."+ "\n" +"3 - Charizard. "))
      if(pkCharm == 1){
        document.write("<h2> Charmander Evolui para Charmeleon </h2>")
        window.onload = function imageOption() {
          document.getElementById("imageoption").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png";
          //document.write("<h3> = Ivysaur </h3>")
          document.getElementById("imageoptions").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png";

        }
      }

      if(pkCharm == 2){
        document.write("<h2> Charmeleon Evolui para Charizard </h2>")
        window.onload = function imageOption() {
          document.getElementById("imageoption").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png" ;
         
          document.getElementById("imageoptions").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png";
        }
      }
      if(pkCharm == 3 ){
        document.write("<h2>Charizard não Evolui</h2>")
        window.onload = function imageOption() {
          document.getElementById("imageoption").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png";
        }
      }
}
/* */
if(listaDePokemons == 3){
  var pkSquirt = parseInt(prompt("Escolha o pokémon que deseja saber a  evolução:"+ "\n" + "1 - Squirtle."+ "\n" + "2 - Wartortle ."+ "\n" +"3 - Blastoise. "))
      if(pkSquirt == 1){
        document.write("<h2> Squirtle Evolui para Wartortle </h2>")
        window.onload = function imageOption() {
          document.getElementById("imageoption").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png";
          //document.write("<h3> = Ivysaur </h3>")
          document.getElementById("imageoptions").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png";

        }
      }

      if(pkSquirt == 2){
        document.write("<h2> Wartortle Evolui para Blastoise  </h2>")
        window.onload = function imageOption() {
          document.getElementById("imageoption").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png" ;
         
          document.getElementById("imageoptions").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png";
        }
      }
      if(pkSquirt == 3 ){
        document.write("<h2>Blastoise não Evolui</h2>")
        window.onload = function imageOption() {
          document.getElementById("imageoption").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png";
        }
      }
}
/* */ 
if(listaDePokemons == 4){
  var pkPika = parseInt(prompt("Escolha o pokémon que deseja saber a  evolução:"+ "\n" + "1 - Pichu ."+ "\n" + "2 - Pikachu ."+ "\n" +"3 - Raichu. "))
      if(pkPika == 1){
        document.write("<h2> Pichu Evolui para Pikachu </h2>")
        window.onload = function imageOption() {
          document.getElementById("imageoption").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png";
          //document.write("<h3> = Ivysaur </h3>")
          document.getElementById("imageoptions").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png";

        }
      }

      if(pkPika == 2){
        document.write("<h2> Pikachu Evolui para Raichu  </h2>")
        window.onload = function imageOption() {
          document.getElementById("imageoption").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" ;
         
          document.getElementById("imageoptions").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png";
        }
      }
      if(pkPika == 3 ){
        document.write("<h2>Raichu não Evolui</h2>")
        window.onload = function imageOption() {
          document.getElementById("imageoption").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png";
        }
      }
}

/*if(listaDePokemons == 1){
  document.write("<h2> Pikachu </h2>")
  window.onload = function imageOption() {
    document.getElementById("imageoption").src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png";
    
}*/
/*document.addEventListener("DOMContentLoaded", function(){
   document.getElementById("imageoption").src = "http://pngimg.com/image/27833";
});*/



//DOCUMENT.WRITE = Exibe na tela não na caixa.
// If/Else if/ Else = verificador de opções
// == Serve pra comparação / diferente do = pra atribuir o valor

