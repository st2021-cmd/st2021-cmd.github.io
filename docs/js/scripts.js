function highlightStart(className) {
$("."+className).css('opacity', '0.5');
return;
}

function highlightStop(className) {
$("."+className).css('opacity', '0');
return;
}

function goItem(idName) {
  $("#"+idName).css('opacity', '1');
  $("#"+idName).css('z-index', '1');
}

function goBack(idName) {
$("#"+idName).css('opacity', '0');
$("#"+idName).css('z-index', '-1');
return;
}

function changeHeight(idName) {
var img = $("#" + idName).getElementsByTagName('img');
var y = img.height;
var intViewport = window.innerHeight
if (y > intViewport) {
  img.css('height', '100vh');
  img.css('width', 'auto');
  }
  return;
}
