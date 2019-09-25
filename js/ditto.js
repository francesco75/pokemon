var request = new XMLHttpRequest()
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto/', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  
  
  if (request.status >= 200 && request.status < 400) { 	  
      var tr = '<tr><td>'+ "National: " +'</td><td>'+ data.base_experience +'</td></tr>'+"<tr><td>"+ "Weight: " +'</td><td>'+ data.weight +'</td><tr>'+
             '<tr><td>'+ "Type: " +'</td><td>'+'<button><a  href="normal">'+ data.types[0].type.name+'</a></button>' +'</td></tr>'+"<tr><td>"+ "Name: " +'</td><td>'+ data.species.name +'<tr><td>'+ "Move: " +'</td><td>'+ data.moves[0].move.name +'</td></tr>'+'</td><tr>'+
             '<tr><td>'+ "Height: " +'</td><td>'+ data.height +'</td></tr>'+"<tr><td>"+ "Abilities: " +'</td><td>'+  data.abilities[0].ability.name+","+data.abilities[1].ability.name +'</td></tr>';
      // Append the rows in the table
      $('#tbody1').append(tr);
      var text="";
      var i;
      for (i = 0; i < data.stats.length; i++){
     text += data.stats[i].stat.name +"   "+data.stats[i].base_stat + "<br>";
   }
      var tr1 = '<tr><td>'+ text +'</td><td>';
      
      $('#tbody4').append(tr1);
    }
  } 

request.send()
