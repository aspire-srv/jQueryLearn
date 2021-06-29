

   $(document).ready(function () {

    $("#add").click(function(){
       var val1 = $("#val1").val();
       var val2 = $("#val2").val();
       var result = parseInt(val1) +  parseInt(val2);
       $("#result").html( "Answer : " + result);
       $("#menu1").html( "Addition +");
    });


    $("#sub").click(function(){
       var val1 = $("#val1").val();
       var val2 = $("#val2").val();
       var result = val1 - val2;
       $("#result").html( "Answer : " + result);
       $("#menu1").html( "Subtraction -");
    });
    $("#multiply").click(function(){
        var val1 = $("#val1").val();
       var val2 = $("#val2").val();
       var result = val1 * val2;

       $("#result").html( "Answer : " + result);
       $("#menu1").html( "Multiplication *");
    });
    
    $("#divide").click(function(){
       var val1 =parseFloat($("#val1").val())|| 0;
       var val2 = parseFloat($("#val2").val())|| 0;
        var result = val1 / val2;

        $("#result").html( "Answer : " + result);
        $("#menu1").html( "Division /");
    });

    

});