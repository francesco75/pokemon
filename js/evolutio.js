var r = new XMLHttpRequest()
  r.open('GET', 'https://pokeapi.co/api/v2/type/4/', true)
  r.onload = function() {
  var ev = JSON.parse(this.response)
  
  
    if(r.status >=200 && r.status < 400){
       // Begin accessing JSON data here
    
    
    
        var tr = '<tr><td>'+ "  " +'</td><td>'+ ev.pokemon[0].pokemon.name +'</td><td>'+"    Level 16 =>   " +'</td><td>'+
         ev.pokemon[1].pokemon.name +'</td><td>'+"    The New Generation    " +'</td><td>'+ ev.pokemon[2].pokemon.name +'</td></tr>' ;  
         $('#tevolut').append(tr);  
   
         
      
}
  }

r.send()
