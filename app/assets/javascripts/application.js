// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular
//= require dropzone
//= require_tree .

$(function() {
  Dropzone.autoDiscover = false;

  var mediaDropzone;
  mediaDropzone = new Dropzone("#media-dropzone");
  return mediaDropzone.on("success", function(file, responseText) {
    var imageUrl;
    imageUrl = responseText.file_name.url;
    console.log(imageUrl);
    $('#close_modal').click();
    mediaDropzone.removeAllFiles()
  });
});

$('.selectpicker').selectpicker({
    style: 'btn-info',
    size: 4
});