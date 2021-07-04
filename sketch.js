Webcam.set({
    width:310,
    height:300,
    image_format : 'png',
    png_quality:90,

    constraints: {
        facingMode: "environment"
    }
});
  camera = document.getElementById("camera");

Webcam.attach('#camera');

function freeze(){
  Webcam.freeze()
}
function unfreeze(){
  Webcam.unfreeze()
}
function snapshot(){
  Webcam.snap( function(data_uri) {
    document.getElementById("snapshot").innerHTML = '<img src="'+data_uri+'"/>';
  })}