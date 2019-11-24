console.log("Oh hai");

//was undefined in hmtl
// function bigtotal() {
//
// var tds = innerHTML.getElementById('countit').getElementsByTagName('td');
// var sum = 0;
// for(var i = 0; i < tds.length; i ++) {
//     if(tds[i].className == 'count-me') {
//         sum += isNaN(tds[i].innerHTML) ? 0 : parseInt(tds[i].innerHTML);
//     }
//   return sum
//   console.log(sum);
// }
// }

var sum = 0;
$('.count-me').each(function()
{
    sum += Number($(this).text()) || 0;
    console.log(sum);
    $('#result').text(sum);
});


// document.getElementById('countit').innerHTML += '<tr><td>' + '</td><td>total</td></tr>' + sum;
