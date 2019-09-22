var req = new XMLHttpRequest()
  req.open('GET', 'https://pokeapi.co/api/v2/pokemon/1/', true)
  req.onload = function() {
  var data1 = JSON.parse(this.response)
  
  
    if(req.status >=200 && req.status < 400){
  // Begin accessing JSON data here
    var tr = '<tr><td>'+ "National: " +'</td><td>'+ data1.base_experience +'</td></tr>'+"<tr><td>"+ "Weight: " +'</td><td>'+ data1.weight +'</td><tr>'+
             '<tr><td>'+ "Type: " +'</td><td>'+'<button><a href="/poison">'+ data1.types[0].type.name+'</button></a>' +'</td></tr>'+"<tr><td>"+ "Name: " +'</td><td>'+'<a href="/evolution">'+ data1.species.name+'</a>' +'</td></tr>'+
             '<tr><td>'+ "Height: " +'</td><td>'+ data1.height +'</td></tr>'+"<tr><td>"+ "Abilities: " +'</td><td>'+ data1.abilities[0].ability.name +'</td></tr>';
      // Append the rows in the table
      $('#tbody2').append(tr);
      var text="";
      var i;
      for (i = 0; i < data1.stats.length; i++){
     text += data1.stats[i].stat.name +"   "+data1.stats[i].base_stat + "<br>";
   }
      var tr1 = '<tr><td>'+ text +'</td><td>';
      
      $('#tbody5').append(tr1);
}
  }

req.send()
