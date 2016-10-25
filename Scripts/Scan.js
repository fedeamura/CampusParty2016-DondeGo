$(function(){

  $('#webcam').html5_qrcode(
    function(data){
      alert(data);
    },
    function(error){

    },
    function(videoError){
     alert(videoError);
    }
  );

});
