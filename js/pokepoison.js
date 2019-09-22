var request2 = new XMLHttpRequest()
  request2.open('GET', 'https://pokeapi.co/api/v2/type/4/', true)
  request2.onload = function() {
  var datapoison = JSON.parse(this.response)
  
  
    if(request2.status >=200 && request2.status < 400){
  // Begin accessing JSON data here
    var i,j,k,z;
    
    for (i = 0; i < 25; i++){
        var tr = '<tr><td>'+ "Name: " +'</td><td>'+ datapoison.pokemon[i].pokemon.name +'</td></tr>'  ;  
    $('#tbodyditto5').append(tr);  
   }
   for (j = 25; j < 50; j++){
        var tr = '<tr><td>'+ "Name: " +'</td><td>'+ datapoison.pokemon[j].pokemon.name +'</td></tr>'  ;  
    $('#tbodyditto6').append(tr);  
   }
     for (k = 50; k < datapoison.pokemon.length; k++){
        var tr = '<tr><td>'+ "Name: " +'</td><td>'+ datapoison.pokemon[k].pokemon.name +'</td></tr>'  ;  
    $('#tbodyditto7').append(tr);  
   }      
      
}
  }

request2.send()
