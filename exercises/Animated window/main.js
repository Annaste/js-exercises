$(document).ready(function() {
  $('#dWindow').dialog({
  	autoOpen: false,
  	show: "blind",
  	draggable: true,
  	resizable: false,
  	closeOnEscape: false,
  	modal: true,
  	buttons: [{text: "Close", click: function() {$(this).dialog("close")}}]
  });
  $( "#opener" ).click(function(){
      $( "#dWindow" ).dialog( "open" );
      // return false;
    });
});
