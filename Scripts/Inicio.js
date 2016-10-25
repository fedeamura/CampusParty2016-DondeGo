$(function(){
  $('#btnCondones').click(function(){
    $(location).attr('href', 'Mapa.html?modo=condones');
  });

  $('#btnVacunatorios').click(function(){
    $(location).attr('href', 'Mapa.html?modo=vacunatorios');
  });

  $('#btnEscanear').click(function(){
    $(location).attr('href', 'Scan.html');
  });

  $('#btnCheckIn').click(function(){
    $(location).attr('href', 'CheckIn.html');
  });

})
