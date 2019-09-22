var request1 = new XMLHttpRequest()
  request1.open('GET', 'https://pokeapi.co/api/v2/type/1/', true)
  request1.onload = function() {
  var datanormal = JSON.parse(this.response)

  
    if(request1.status >=200 && request1.status < 400){
  // Begin accessing JSON data here
    var i,j,k,z;
    
    for (i = 0; i < 25; i++){
    var tr = '<tr><td>'+ "Name: " +'</td><td>'+ datanormal.pokemon[i].pokemon.name +'</td></tr>'  ;  
    $('#tbodyditto1').append(tr);  
   }
   for (j = 25; j < 50; j++){
    var tr = '<tr><td>'+ "Name: " +'</td><td>'+ datanormal.pokemon[j].pokemon.name +'</td></tr>'  ;  
    $('#tbodyditto2').append(tr);  
   }
     for (k = 50; k < 75; k++){
        var tr = '<tr><td>'+ "Name: " +'</td><td>'+ datanormal.pokemon[k].pokemon.name +'</td></tr>'  ;  
    $('#tbodyditto3').append(tr);  
   }
    for (z = 75; z < 100; z++){
        var tr = '<tr><td>'+ "Name: " +'</td><td>'+ datanormal.pokemon[z].pokemon.name +'</td></tr>'  ;  
    $('#tbodyditto4').append(tr);  
   }      
}
  }

request1.send()
