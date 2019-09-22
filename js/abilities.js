var request6 = new XMLHttpRequest()
  request6.open('GET', 'https://pokeapi.co/api/v2/ability/4/', true)
  request6.onload = function() {
  var ability = JSON.parse(this.response)
  
  
    if(request6.status >=200 && request2.status < 400){
  // Begin accessing JSON data here
    var i;
    var text=""
    for(i=0; i<ability.pokemon.length; i++){
       text += ability.pokemon[i].pokemon.name + "<br>";

    }
    
        var tr = '<tr><td>'+ "Type: " +'</td><td>'+ ability.name +'</td></tr>'+ '<tr><td>'+ "Generation: " +'</td><td>'+ ability.generation.name +'</td></tr>'+
                  '<tr><td>'+ "Name: " +'</td><td>'+ text +'</td></tr>';  
    $('#tability').append(tr);  
   }
         
      
}
  

request6.send()
