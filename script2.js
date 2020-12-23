$(document).ready(function(){ 
    $( "#resizable" ).resizable();

    $( "#accordion" ).accordion();

    $('#info').on('click', function() {
        $( "#dialog" ).dialog();
    } );
    
});