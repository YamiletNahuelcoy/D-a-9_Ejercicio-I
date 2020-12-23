/*nombre del autor = Yamilet Ancan
versión actual = N°1
objetivos del archivo = Código para crear una acrodeon con JQuery UI*/
$(document).ready(function(){ 
    $( "#resizable" ).resizable();

    $( "#accordion" ).accordion();

    $('#info').on('click', function() {
        $( "#dialog" ).dialog();
    } );
    
});