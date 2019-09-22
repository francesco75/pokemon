
  var requ = new XMLHttpRequest()
  requ.open('GET', 'https://pokeapi.co/api/v2/type/3/', true)
  requ.onload = function() {
  var data2 = JSON.parse(this.response)
  var text=[];
  var text1=[];
  var i,j;
    if(requ.status >=200 && requ.status < 400){
  // Begin accessing JSON data here
  for (i = 0; i < 15; i++){      
    text[i]=data2.moves[i].name + "<br>";
      }
  text.sort();
  var tr = '<tr><td>'+ 'Move: ' +'</td><td>'+ text+'</td></tr>';

  //  Append the rows in the table
  $('#tbody3').append(tr);
  j=0;
  for (i = 15; i < data2.moves.length; i++){
    text1[j]=data2.moves[i].name + "<br>";
    j++;
  }
   text1.sort();  
   var tr = '<tr><td>'+ 'Move: ' +'</td><td>'+ text1 +'</td></tr>';           
    //  Append the rows in the table
      $('#tbodynext3').append(tr);

}
  }

requ.send()
