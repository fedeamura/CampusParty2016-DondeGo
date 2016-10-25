var modo;
var modoCondones = 'condones';
var modoVacunatorios = 'vacunatorios';

$(function(){
  var params = getUrlParams();
  modo = params.modo;
});

function getUrlParams()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 15
  });

  obtenerUbicacionActual(
    function(pos){
      map.setCenter(pos);
      agregarMarcador(pos, 'Ubicacion actual');
      cargarDatos();
    },
    function(){
      alert('Error obteniendo la ubicacion actual');
    });
}

function obtenerUbicacionActual(callback, callbackError){
  // Try HTML5 geolocation.
  if (!navigator.geolocation) {
    handleLocationError(false, infoWindow, map.getCenter());
    return;
  }

  navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      callback(pos);

    }, function() {
      callbackError();
    });
}

function agregarMarcador(pos, titulo){
  var marker = new google.maps.Marker({
    position: pos,
    map: map,
    title: titulo
  });
}

function cargarDatos(){
  switch (modo) {
    case modoCondones:
      buscarMarcadoresCondones(function(marcadores){
        alert(JSON.stringify(marcadores));
      });
    break;

    case modoVacunatorios:
      buscarMarcadoresVacunatorios(function(marcadores){
        alert(JSON.stringify(marcadores));
      });
    break;
  }
}

function buscarMarcadoresCondones(callback){
  var marcadores = [];
  callback(marcadores);
}

function buscarMarcadoresVacunatorios(callback){
  var marcadores = [];
  callback(marcadores);
}
